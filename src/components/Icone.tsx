import { icones } from '@/app/utils/Icones'

interface IconeProps {
    nome: string
}

export function Icone({nome}: IconeProps){
    return icones.find( icone => icone.nome == nome )?.icone    
}