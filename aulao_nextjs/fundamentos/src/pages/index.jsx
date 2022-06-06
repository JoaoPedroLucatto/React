import Link from 'next/link'
import Nevagacao from '../components/Navegacao'

export default function home(){
    const a = 4
    const b = 3 

    const titulo =  <h1>Fundamentos Next.js & React</h1>

    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Nevagacao cor='#8a2be2' texto="Estiloso" caminho="/estiloso"/>
            <Nevagacao texto="Exemplo" caminho="/exemplo"/>
            <Nevagacao cor='green' texto="Nevegacao 01#" caminho="/navegacao"/>
            <Nevagacao cor='orange' texto="Nevegacao 02#" caminho="/cliente/sp/123"/>
            <Nevagacao cor='blue' texto="Componente com Estado" caminho="/estado"/>
            <Nevagacao cor='pink' texto="Integração #01" caminho="/integracao"/>
            <Nevagacao cor='#B0BF62' texto="Conteudo Estático" caminho="/estatico"/>
            <Nevagacao cor='#D280FF' texto="Conteudo Dinâmico" caminho="/dinamico"/>
            {/* {titulo}
            {subtitulo()}
            {a * b} */}
        </div>
    )
}