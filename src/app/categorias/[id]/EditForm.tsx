"use client"

import { update } from "@/app/actions/categorias/update";
import { icones } from "@/app/utils/Icones";
import { Icone } from "@/components/Icone";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";

const initialState = {
    message: '',
}


export function EditForm(categoria: Categoria) {
    const [state, formAction] = useFormState(update, initialState)
    const [nome, setNome] = useState(categoria.nome)

    return (
        <form action={formAction} className="flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]">
            <h2 className="text-2xl font-bold">Editar Categoria {categoria.nome}</h2>
            <input type="hidden" name="id" value={categoria.id} />
            <Input
                key="nome"
                label="Nome"
                name="nome"
                value={nome}
                onValueChange={setNome}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.message != ''}
                errorMessage={state?.message}
            />

            <Autocomplete
                defaultItems={icones}
                label="Ícone"
                name="icone"
                variant="bordered"
                labelPlacement={"outside"}
                placeholder="procurar ícone"
            >
                {(icone) => <AutocompleteItem key={icone.nome} startContent={<Icone nome={icone.nome} />}>{icone.nome}</AutocompleteItem>}
            </Autocomplete>

            <div className="flex justify-around mt-4">
                <Link href="/categorias">
                    <Button variant="bordered" >cancelar</Button>
                </Link>
                <SubmitButton></SubmitButton>
            </div>
        </form>
    )
}