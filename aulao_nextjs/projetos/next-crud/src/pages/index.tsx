import { table } from 'console'
import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  const clientes = [
    new Cliente('Ana', '34', '1'),
    new Cliente('João', '23', '2'),
    new Cliente('Zé', '40', '3'),
    new Cliente('Luan', '53', '4'),
    new Cliente('Kuan', '48', '5')
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExluido(cliente: Cliente){
    console.log(`Exlcuido.....${cliente.nome}`)
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(clientes :Cliente){ 
    console.log(clientes)
    setVisivel('tabela')
  }

  return (
    <div className={`flex justify-center items-center h-screen
                    bg-gradient-to-r from-blue-500 to-purple-500
                    text-white
                    `}>
      <Layout titulo='Cadastro Simples'>
        {visivel === 'tabela' ? (
        <>
          <div className='flex justify-end'>
            <Botao color='green' className='mb-4' onClick={novoCliente}>Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluiddo={clienteExluido}></Tabela>
          </>    
        

        ) : (

          <Formulario 
            cliente={cliente}
            cancelado={() => setVisivel('tabela')}
            clienteModou={salvarCliente}/>

        )}
      </Layout>
    </div>
  )
}
