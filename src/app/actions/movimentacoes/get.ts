'use server'

export async function get() {
    await new Promise(r => setTimeout(r, 1000))
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao", { next: { revalidate: 0 } })
    const json = await resp.json()
    return json.content
}