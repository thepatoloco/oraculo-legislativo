import { openai } from "@ai-sdk/openai";
import { embed } from "ai";
import { getMongoDb } from "./mongo";

export async function vectorSearch(content: string, initiative: string): Promise<string[]> {
    const { embedding } = await embed({
        model: openai.embedding("text-embedding-3-small"),
        value: content
    });
    
    const mongo = await getMongoDb();
    const collection = mongo.collection("initiative_embeddings");
    const result = collection.aggregate([
        {
            "$vectorSearch": {
                "index": "vector_index",
                "path": "plot_embedding",
                "queryVector": embedding,
                "numCandidates": 150, 
                "limit": 10,
                "filter": {
                    "initiative_id": initiative
                }
            }
        }
    ]);

    const vectorResults: string[] = [];
    await result.forEach((doc) => {
        console.log(JSON.stringify({
            ...doc,
            plot_embedding: undefined
        }));
        vectorResults.push(doc.content);
    });

    return vectorResults;
}