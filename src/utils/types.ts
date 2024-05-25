// Function excecution
export type FunctionResult<T> = {
    success: true,
    result: T,  
}|{
    success: false,
    error: any,
}