import { mongoConnect } from "@/utils/mongo";
import { openai } from "@ai-sdk/openai";
import { embed } from "ai";
import { NextResponse } from "next/server";

export async function GET() {
    const { embedding } = await embed({
        model: openai.embedding("text-embedding-3-small"),
        value: "El presente Decreto entrará en vigor el día siguiente al de su publicación en el Diario Oficial de la Federación."
    });
    console.log(embedding);
    
    const mongo = await mongoConnect();
    const result = await mongo.Collection.aggregate([
        {
            "vectorSearch": {
                "path": "plot_embedding",
                "queryVector": embedding
            }
        }
    ]);

    return NextResponse.json({ messges: "Success!" }, { status: 200 });
}
