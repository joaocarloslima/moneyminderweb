import { create } from "@/app/actions/categorias/create";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import Link from "next/link";

export default function CadastrarCategoria(){

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="categorias" />

            <form action={create} className="flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]">
                <h2 className="text-2xl font-bold">Nova Categoria</h2>
                <Input
                    key="nome"
                    label="Nome"
                    name="nome"
                    labelPlacement={"outside"}
                />
                <div className="flex justify-around mt-4">
                    <Link href="/categorias">
                        <Button variant="bordered" >cancelar</Button>
                    </Link>
                    <SubmitButton></SubmitButton>
                </div>
            </form>
        </main>


    )
}