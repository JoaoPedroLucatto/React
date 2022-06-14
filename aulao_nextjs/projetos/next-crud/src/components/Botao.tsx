import { Children } from "react"

interface botaoProps{
    color?: 'green' | 'gray' | 'blue'
    className?: string
    children: any
    onClick?: () => void
}


export default function Botao(props: botaoProps){

    const cor= props.color ?? 'gray'

    return(
        <button 
            className={`
                bg-gradient-to-r from-${cor}-500 to-${cor}-700
                text-white px-4 py-2 rounded-md
                ${props.className}`}
                onClick={props.onClick}>
            {props.children}
        </button>
    )
}