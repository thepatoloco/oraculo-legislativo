import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";
import { z } from "zod";
import { recursiveClone } from "../clone";

// Types
import { ExecutableTool, ToolResponse } from "../types";
import { CoreMessage, LanguageModel, TextPart, TextStreamPart, ToolCallPart, ToolContent } from "ai";


interface BaseAgentProps {
    model: LanguageModel,
    systemMessage: string,
    tools: Record<string, ExecutableTool<z.ZodTypeAny, ToolResponse>>
}

export class BaseAgent {
    systemMessage: string;
    tools: Record<string, ExecutableTool<z.ZodTypeAny, ToolResponse>>;
    model: LanguageModel;

    constructor({ model, systemMessage, tools }: BaseAgentProps) {
        this.model = model;
        this.systemMessage = systemMessage;
        this.tools = tools;
    }

    getResponse(messageHistory: CoreMessage[]) {
        let responses: CoreMessage[] = [];
        const stream = createStreamableValue(responses);

        const handleResponseStream = async () => {
            let conversationEnd = false;
            while (!conversationEnd) {
                const result = await streamText({
                    model: this.model,
                    system: this.systemMessage,
                    tools: this.tools,
                    messages: [...messageHistory, ...responses]
                });

                for await (const streamPart of result.fullStream) {
                    const { newResponses, responseEnd } = this.streamContent({ streamPart, responseHistory: responses });
                    responses = newResponses;
                    conversationEnd = responseEnd;

                    stream.update(recursiveClone(responses));
                }
            }
            stream.done(recursiveClone(responses));
        }
        handleResponseStream();

        return stream;
    }

    streamContent({ streamPart, responseHistory }: { 
        streamPart: TextStreamPart<Record<string, ExecutableTool<z.ZodTypeAny, ToolResponse>>>, 
        responseHistory: CoreMessage[] 
    }): {
        newResponses: CoreMessage[],
        responseEnd: boolean
    } {
        let responses = recursiveClone(responseHistory);
        let responseEnd = false;
        
        const lastResponse = responses.length <= 0 ? null : responses[responses.length - 1];
        switch (streamPart.type) {
            case "text-delta":
                if (!lastResponse || lastResponse.role != "assistant") responses.push({ 
                    role: "assistant", 
                    content: [{ type: "text", text: "" }]
                });
                (responses[responses.length - 1].content[0] as TextPart).text += streamPart.textDelta;
                break;
            case "tool-result":
                if (!lastResponse || lastResponse.role != "tool") responses.push({ role: "tool", content: [] });
                (responses[responses.length - 1].content as ToolContent).push({
                    type: streamPart.type,
                    toolCallId: streamPart.toolCallId,
                    toolName: streamPart.toolName,
                    result: streamPart.result
                });
                responseEnd = responseEnd || streamPart.result.responseEnd;
                break;
            case "tool-call":
                if (!lastResponse || lastResponse.role != "assistant") responses.push({ 
                    role: "assistant", 
                    content: [{ type: "text", text: "" }]
                });
                (responses[responses.length - 1].content as (TextPart|ToolCallPart)[]).push({
                    type: "tool-call",
                    toolCallId: streamPart.toolCallId,
                    toolName: streamPart.toolName,
                    args: streamPart.args
                });
                break;
            case "finish":
                responseEnd = responseEnd || streamPart.finishReason === "stop";
                break;
        }

        return { newResponses: responses, responseEnd };
    }
}
