"use server"

import { redirect } from "next/navigation"

export async function create(formData: FormData){
    await new Promise( r => setTimeout(r, 5000))

    const data = {
        nome: formData.get("nome"),
        icone: "apple"
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    const resp = await fetch(process.env.API_BASE_URL + "/categoria", options)

    redirect("/categorias")
    
}