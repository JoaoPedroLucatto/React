interface EntradaProps{
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMuda?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return(
        <div className=" flex flex-col">
            <label className={`mb-3 ${props.className}`}>
                {props.texto}
            </label>
            <input className={`
               border border-purple-500 rounded-lg
                focus:outline-none p-2 bg-gray-100 
                ${props.somenteLeitura ? '' : 'focus:bg-white'}
            `}
            type={props.tipo ?? 'text'} value={props.valor} readOnly={props.somenteLeitura} 
                onChange={e => props.valorMuda?.(e.target.value)}/>
        </div>
    )
}