import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Cliente
    cancelado?: () => void
    clienteModou?: (cliente : Cliente) => void
}

export default function Formulario(props: FormularioProps){

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '0')

    console.log(nome)
    

    return(
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} somenteLeitura/>
            ): false}
            
            <Entrada texto="Nome" valor={nome} valorMuda={setNome}/>
            <Entrada texto="Idade" valor={idade} tipo="number" className="mt-4" valorMuda={setIdade}/>

            <div className=" flex justify-end mt-4">
                <Botao color="green" className="mr-4" onClick={() => props.clienteModou?.(new Cliente(nome, idade, id))}>
                    {id ? 'Alterar' : 'Salvar' }
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}