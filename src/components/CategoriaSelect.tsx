'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { Icone } from "./Icone";

interface CategoriaSelectProps  {
    categorias: Array<Categoria>,
    
}

export function CategoriaSelect({categorias}: CategoriaSelectProps) {

    return (
        <Select
            items={categorias}
            label="Categoria"
            variant="bordered"
            name="categoria"
            placeholder="Selecione uma categoria"
            labelPlacement="outside"
        >
            {(categoria) => 
                <SelectItem key={categoria.id} startContent={<Icone nome={categoria.icone} />}>
                    {categoria.nome}
                </SelectItem>
            }
        </Select>
    )
}