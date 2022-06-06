import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao(){

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

   async function obterClient(){
       const rest = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
       const dados = await rest.json()
       setCliente(dados)
    }

    return(
        <Layout>
            <div>
                <input type="number" className="text" value={codigo}
                    onChange={e=> setCodigo(e.target.value)} />

                <button onClick={obterClient} className="btn">Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Name: {cliente.name}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )

}