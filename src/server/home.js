import { base_url } from "@/data/data"

export async function getAllCategories() {
    try {
        const res = await fetch(base_url + "categories.php")
        const result = await res.json()
        return { status: "success", data: result }
    } catch (error) {
        console.error(error)
        return { status: "failed", error: "Failed to connect to the server" }
    }
}