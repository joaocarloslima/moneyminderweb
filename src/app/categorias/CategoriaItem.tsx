"use client"

import DropDownActions from "@/components/DropDownActions";
import { Icone } from "@/components/Icone";
import { create } from "domain";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/categorias/destroy";
import { useRouter } from "next/navigation";

interface CategoriaItemProps {
    categoria: Categoria
}

export function CategoriaItem({ categoria }: CategoriaItemProps) {
    const router = useRouter()

    function handleDelete() {
        toast.promise(
            destroy(categoria.id),
            {
                loading: "apagando...",
                success: "apagado com sucesso",
                error: "erro ao apagar",
            }
        );
    }

    return (
        <div className="flex justify-between p-2">
            <div className="flex gap-2 items-center">
                <Icone nome={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
            <DropDownActions
                onEdit={ () => router.push(`/categorias/${categoria.id}`) }
                onDelete={handleDelete}
            />
        </div>
    )
}