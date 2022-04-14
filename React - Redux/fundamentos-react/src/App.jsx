import './App.css'
import React from 'react'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/input'
import InderetaPai from './components/comunicacao/InderetaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabProduto from './components/repeticao/TabProdutos'
import ListaAluno from './components/repeticao/ListaAluno'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import RandomSort from './components/basicos/RandomMinMax'

export default function App(){
    return(
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Container">                 
                
                <Card titulo="#13-Desafio Mega" color="#1c2545">
                    <Mega></Mega>
                </Card>


                <Card titulo="#12-Contador" color="#404B5D">
                    <Contador numeroInicial={10}/>
                </Card>

                <Card titulo="#11-Componentes Controlados" color="#FFD97C">
                    <Input/>
                </Card>
                

                <Card titulo="#10-Comunicação Indireta" color="#3E209D">
                    <InderetaPai/>
                </Card>
                

                <Card titulo="#09 -Comunicação Direta" color="#082745">
                     <DiretaPai></DiretaPai>
                </Card> 


                <Card titulo="#08 -Condicional 01" color="#87CAF6">
                    <ParOuImpar numero={20000}/>
                    <UsuarioInfo usuario={{nome: 'João Pedro'}}/>
                    <UsuarioInfo usuario={{nome:''}}/>  
                    <UsuarioInfo usuario={{nome:' '}}/>  
                </Card>        
                
                
                <Card titulo="#07 -Desafio Repetição" color="#505355">
                    <TabProduto/>
                </Card>        
                
                
                <Card titulo="#06 - Repetição" color="#4E616E">
                    <ListaAluno/>
                </Card>

                
                <Card titulo="#05 - Componente Filho" color="#1B4F72">
                    <Familia sobrenome="Ayruth Lucatto">
                        <FamiliaMembro nome="Joao Pedro" />
                        <FamiliaMembro nome="João Victor" />
                        <FamiliaMembro nome="João Angelo" />
                        <FamiliaMembro nome="Ana Lucia" />
                    </Familia>
                </Card>


                <Card titulo="#04 - Número Aleatório" color="#ff3dff">
                    <RandomSort min={5} max={10}/>
                </Card>
                
                <Card titulo="#03 - Fragmento" color="#3d3dff">
                    <Fragmento/>
                </Card>
                
                <Card titulo="#02 - Desafio com Parâmetro" color="#00bdbd">
                    <ComParametro 
                        titulo="Nota do Aluno"
                        aluno="João Pedro"
                        nota={9.3} />
                </Card>

                <Card titulo="#01 - Desafio com Parâmetro" color="#00bd00"> 
                    <Primeiro/>
                </Card>

            </div>
        </div>
    )
}