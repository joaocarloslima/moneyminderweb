"use server"

export async function getUltimas(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao?size=5")
    const json = await resp.json()
    return json.content
}

export async function getMaiorValor(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/maior")
    const json = await resp.json()
    return json.valor
}

export async function getUltimoValor(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/ultima")
    const json = await resp.json()
    return json.valor
}

export async function getMenorValor(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/menor")
    const json = await resp.json()
    return json.valor
}

export async function getTotalPorCategoria(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/total-por-categoria")
    const json = await resp.json()
    return json
}