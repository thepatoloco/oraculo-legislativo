import { CoreMessage, CoreTool } from "ai"
import { z } from "zod"


// AI Comunication Types
export type AiResponseData = {
    responses: CoreMessage[],
    usage: {
        promptTokens: number,
        completionTokens: number,
        totalTokens: number
    }
}

export interface ExecutableTool<PARAMETERS extends z.ZodTypeAny = any, RESULT = any> extends CoreTool<PARAMETERS, RESULT> {
    execute: (args: z.infer<PARAMETERS>) => PromiseLike<RESULT>;
}

export type ToolResponse = {
    data: Record<string, any>,
    responseEnd: boolean
}

// Function excecution
export type FunctionResult<T> = {
    success: true,
    result: T,  
}|{
    success: false,
    error: any,
}

// Blockchain
export type BlockInfo = {
    file_hash: string,
    date: Date,
    previous_block_hash: string
} & {
    type: "initiative",
    file_url: string,
} | {
    type: "votes",
    content: string,
    content_hash: string
}
