import { executeAsyncFunction } from "@/utils/function_exec";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
// import * as pdf from "pdf-parse";
import pdf from "pdf-parse/lib/pdf-parse";
import { chunk } from "llm-chunk";


type PostRequest = {
    title: string;
    description: string;
    party: "PRI"|"PAN"|"PRD"|"PVEM"|"PT"|"MC"|"Morena"|"Sin Partido",
    file_url: string
}
const PostSchema: z.ZodType<PostRequest> = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    party: z.enum(["PRI", "PAN", "PRD", "PVEM", "PT", "MC", "Morena", "Sin Partido"]),
    file_url: z.string().url()
})

export async function POST(request: NextRequest) {
    // Get request data
    const requestResult = await executeAsyncFunction<PostRequest>(async () => {
        const body = await request.json();
        return PostSchema.parse(body);
    });
    if (!requestResult.success) return new Response(JSON.stringify({ message: 'Could not parse request.', error: requestResult.error }), { status: 400 });
    const requestData = requestResult.result;

    const response = await fetch(requestData.file_url);
    const pdfData = await pdf(await response.arrayBuffer() as Buffer);

    const pdfChunks = chunk(pdfData.text, {
        splitter: "sentence",
        minLength: 150,
        maxLength: 300,
        overlap: 15
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
}
