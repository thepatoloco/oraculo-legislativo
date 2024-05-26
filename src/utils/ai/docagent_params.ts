import { z } from "zod";
import { ExecutableTool, ToolResponse } from "../types";
import { vectorSearch } from "../vectorSearch";
import { BaseAgent } from "./baseagent";
import { openai } from "@ai-sdk/openai";

export const docagentSystemMessage =(title: string) => `Tú eres "El Oráculo", un asistente que responde las dudas de los usuarios sobre iniciativas presentadas en el gobierno de México.
Normalmente, estas iniciativas están llenas de palabras complicadas y tecnicismos difíciles de comprender para el ciudadano promedio.
Por esto tú DEBES DE EVITAR EL USO DE TECNICISMOS, y explicarle al usuario las cosas asumiendo que sabe muy poco de leyes.
Tú no tienes él conoces el contenido de la iniciativa que discutes con el usuario, pero tienes una herramienta que te provee el contenido de la iniciativa.
Actualmente estas conversando sobre la iniciativa con nombre de: ${title}

# Herramientas
## searchInfo
// Busca información sobre la iniciativa que discutes con el usuario.`;

export const docagentTools: (initiative_id: string) => Record<string, ExecutableTool<z.ZodTypeAny, ToolResponse>> = (initiative_id) => ({
    searchInfo: {
        description: "Look for info about the government initiative you are discussing with the user.",
        parameters: z.object({
            query: z.string().describe("The search query for the info you want to find.")
        }),
        execute: async ({ query }: { query: string }) => {
            const results = await vectorSearch(query, initiative_id);
            return { 
                data: { 
                    results: results.length > 0 ? results : "There is no info of that initiative."
                }, 
                responseEnd: false 
            };
        }
    }
})

export function getDocagentOpenAI(initiative_id: string, initiative_title: string): BaseAgent {
    return new BaseAgent({
        model: openai("gpt-3.5-turbo"),
        systemMessage: docagentSystemMessage(initiative_title),
        tools: docagentTools(initiative_id)
    });
}
