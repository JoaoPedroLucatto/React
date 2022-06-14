import Cliente from "../core/Cliente"
import { IconeDelet, IconeEdit } from "./Icones"

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluiddo?: (cliente: Cliente) => void
}


export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluiddo

    function renderizaCabecalho(){
        return(
            <tr>
                <td className="text-left p-4">id</td>
                <td className="text-left p-4">Nome</td>
                <td className="text-left p-4">Idade</td>
                {exibirAcoes ? (
                    <td className="p-4">Ações</td>
                ) : false}
                
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((Cliente, i) =>{
            return(
                <tr key={Cliente.id} 
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>

                    <td className="text-left p-4">
                        {Cliente.id}
                    </td>
                    <td className="text-left p-4">
                        {Cliente.nome}
                    </td>
                    <td className="text-left p-4">
                        {Cliente.idade}
                    </td>
                    { exibirAcoes ?  rendelizarAcoes(Cliente): false}
                </tr>
            )
        })
    }


    function rendelizarAcoes(cliente: Cliente){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado ?(
                    <button onClick={()=> props.clienteSelecionado?.(cliente)}
                        className={`flex justify-center items-center
                            text-green-600 rounded-full p-2 m-1
                            hover:bg-purple-50`}>
                        {IconeEdit}
                    </button>
                ):false}

                {props.clienteExcluiddo ? (
                    <button onClick={() => props.clienteExcluiddo?.(cliente)}
                        className={`flex justify-center items-center
                                    text-red-600 rounded-full p-2 m-1
                                    hover:bg-red-200`}>
                        {IconeDelet}
                    </button>
                ) :false}
            </td>
        )   
    }

    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
               bg-gradient-to-r from-purple-500 to-purple-800
               text-gray-50
               text-center
            `}>
                {renderizaCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )

}