import Link from "next/link";

export default function NotFound() {
  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <h1>Erro</h1>
      <p>Página não encontrada</p>
      <Link href="/">voltar para página inicial</Link>
    </main>


  );
}
