import { vectorSearch } from "@/utils/vectorSearch";
import { NextResponse } from "next/server";

export async function GET() {
    const vectorSearchResults = await vectorSearch("El presente Decreto entrará en vigor el día siguiente al de su publicación en el Diario Oficial de la Federación.", "6652311496afa79f4d605a59");

    return NextResponse.json({ messges: "Success!", vectorSearchResults }, { status: 200 });
}
