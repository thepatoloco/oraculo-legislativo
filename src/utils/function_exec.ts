import { FunctionResult } from "./types";


export function executeFunction<T>(fn: () => T): FunctionResult<T> {
    try {
        const result = fn();
        return {
            success: true,
            result: result
        }
    } catch (error) {
        return {
            success: false,
            error: error
        }
    }
}

export async function executeAsyncFunction<T>(fn: () => Promise<T>): Promise<FunctionResult<T>> {
    try {
        const result = await fn();
        return {
            success: true,
            result: result
        }
    } catch (error) {
        return {
            success: false,
            error: error
        }
    }
}
