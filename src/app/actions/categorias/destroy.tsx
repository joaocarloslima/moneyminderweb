"use server"

export async function destroy(id: number){
    await new Promise( r => setTimeout(r, 5000))
    
    const options = {
        method: "DELETE"
    }

    const resp = await fetch(process.env.API_BASE_URL + "/categoria/" + id, options)


}