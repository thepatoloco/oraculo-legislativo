import { executeAsyncFunction } from "@/utils/function_exec";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import pdf from "pdf-parse/lib/pdf-parse";
import fetch from "node-fetch";
import { db } from "@/utils/db";
import { z } from "zod";
import { BlockInfo } from "@/utils/types";

type PostRequest = {
  date: Date;
} & (
  | {
      type: "initiative";
      file_url: string;
    }
  | {
      type: "vote";
      content: string;
      file_hash: string;
    }
);
/*type PostRequest = {
  type: "initiative" | "vote";
  file_url?: string;
  content?: string;
  file_hash?: string;
  date: Date;
};*/
const PostSchema = z
  .object({
    type: z.enum(["initiative", "vote"]),
    date: z.coerce.date(),
    file_url: z.string().url().optional(),
    content: z.string().min(1).optional(),
    file_hash: z.string().optional(),
  })
  .superRefine((arg, ctx) => {
    switch (arg.type) {
      case "initiative":
        if (!arg.file_url)
          ctx.addIssue({
            params: ["file_url"],
            code: z.ZodIssueCode.custom,
          });
        break;
      case "vote":
        if (!arg.content)
          ctx.addIssue({
            params: ["content"],
            code: z.ZodIssueCode.custom,
          });
        if (!arg.file_hash)
          ctx.addIssue({
            params: ["file_hash"],
            code: z.ZodIssueCode.custom,
          });
        break;
    }
  });

export async function POST(request: NextRequest) {
  // Get request data
  const requestResult = await executeAsyncFunction<PostRequest>(async () => {
    const body = await request.json();
    return PostSchema.parse(body) as PostRequest;
  });
  if (!requestResult.success)
    return new Response(
      JSON.stringify({
        message: "Could not parse request.",
        error: requestResult.error,
      }),
      { status: 400 }
    );
  const requestData = requestResult.result;

  const lastBlock = await db.block.findFirst({
    orderBy: {
      created_at: "desc",
    },
  });

  let blockData: BlockInfo | undefined = undefined;
  switch (requestData.type) {
    case "initiative":
      const fileResponse = await fetch(requestData.file_url);
      const pdfData = await pdf((await fileResponse.arrayBuffer()) as Buffer);
      const pdfText = pdfData.text;
      const hashPdf = crypto.createHash("sha256").update(pdfText).digest("hex");
      blockData = {
        type: "initiative",
        file_url: requestData.file_url,
        file_hash: hashPdf,
        date: requestData.date,
        previous_block_hash: lastBlock
          ? lastBlock.hash
          : "0000000000000000000000000000000000000000000000000000000000000000",
      };
      break;
    case "vote":
      const hashContent = crypto
        .createHash("sha256")
        .update(requestData.content)
        .digest("hex");
      blockData = {
        type: "votes",
        content: requestData.content,
        content_hash: hashContent,
        file_hash: requestData.file_hash,
        date: requestData.date,
        previous_block_hash: lastBlock
          ? lastBlock.hash
          : "0000000000000000000000000000000000000000000000000000000000000000",
      };
      break;
  }

  const blockHash = crypto
    .createHash("sha256")
    .update(JSON.stringify(blockData))
    .digest("hex");
  const block = await db.block.create({
    data: {
      hash: blockHash,
      data: blockData,
    },
  });

  return NextResponse.json(
    { message: "Initiative was created succesfully!", block },
    { status: 200 }
  );
}
