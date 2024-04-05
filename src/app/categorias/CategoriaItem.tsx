import DropDownActions from "@/components/DropDownActions";
import { Icone } from "@/components/Icone";
import { Apple, ChevronDown } from "lucide-react";

interface CategoriaItemProps{
    categoria : {
        id: number,
        nome: string,
        icone: string
    }
}

export function CategoriaItem({ categoria }: CategoriaItemProps){
    return (
        <div className="flex justify-between p-2">
            <div className="flex gap-2 items-center">
                <Icone nome={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
            <DropDownActions />
        </div>
    )
}