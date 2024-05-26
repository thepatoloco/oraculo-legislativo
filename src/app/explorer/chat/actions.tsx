'use server'

import { getDocagentOpenAI } from "@/utils/ai/docagent_params";
import { CoreMessage } from "ai";

export async function continueConversation(messages: CoreMessage[], initiative_id: string) {
    const docAgent = await getDocagentOpenAI(initiative_id);

    const stream = docAgent.getResponse(messages);

    return stream.value;
}
