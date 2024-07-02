export interface ApiResults {
    count: number;
    data: string[];
}

export async function getApiResults() {
    const responce = await fetch("http://localhost:8080");
    if(!responce.ok) {
        throw new Error("Failed to fetch API");
    }
    const data = (await responce.json()) as ApiResults;
    return data;
}