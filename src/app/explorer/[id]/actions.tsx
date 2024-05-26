'use server'

import { getDocagentOpenAI } from "@/utils/ai/docagent_params";
import { db } from "@/utils/db";
import { CoreMessage } from "ai";

export async function continueConversation(messages: CoreMessage[], initiative_id: string) {
    const initiative = await db.initiative.findUnique({ where: { id: initiative_id } });
    if (!initiative) throw Error("The initiative does not exists.");
    const docAgent = await getDocagentOpenAI(initiative_id, initiative.title);

    const stream = docAgent.getResponse(messages);

    return stream.value;
}
