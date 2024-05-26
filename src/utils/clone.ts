export function recursiveClone<T>(obj: T): T {
    if (obj === null || typeof obj !== "object") return obj;

    if (Array.isArray(obj)) return obj.map(o => recursiveClone(o)) as T;

    const copy: Record<any, any> = {};
    for (const key in obj) {
        copy[key] = recursiveClone(obj[key]);
    }
    return copy as T;
}
