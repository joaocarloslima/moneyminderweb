import { Apple, Book, Bus } from 'lucide-react'

interface IconeProps {
    nome: string
}

const icones = [
    {nome: "apple", icone: <Apple />},
    {nome: "book", icone: <Book />},
    {nome: "bus", icone: <Bus />},
]

export function Icone({nome}: IconeProps){
    return icones.find( icone => icone.nome == nome )?.icone    
}