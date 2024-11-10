import { base_url } from "@/data/data"


export async function getMealById(id) {
    try {
        const res = await fetch(base_url + "/lookup.php?i=" + id, { cache: "force-cache" })
        const result = await res.json()
        return { status: "success", data: result }
    } catch (error) {
        console.error(error)
        return { status: "failed", error: "Failed to connect to the server" }
    }
}

export async function getMealsByPath(path = "/search.php?f=a") {

    try {
        const res = await fetch(base_url + path, { cache: "force-cache" })
        const result = await res.json()
        return { status: "success", data: result }
    } catch (error) {
        console.error(error)
        return { status: "failed", error: "Failed to connect to the server" }
    }
}
