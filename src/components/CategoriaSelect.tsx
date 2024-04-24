'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEventHandler } from "react";
import { Icone } from "./Icone";

interface CategoriaSelectProps  {
    categorias: Array<Categoria>,
    onChange?: ChangeEventHandler
}

export function CategoriaSelect({categorias, onChange}: CategoriaSelectProps) {

    return (
        <Select
            items={categorias}
            label="Categoria"
            variant="bordered"
            name="categoria"
            placeholder="Selecione uma categoria"
            labelPlacement="outside"
            onChange={onChange}
        >
            {(categoria) => 
                <SelectItem key={categoria.nome} startContent={<Icone nome={categoria.icone} />}>
                    {categoria.nome}
                </SelectItem>
            }
        </Select>
    )
}