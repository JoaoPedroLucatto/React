import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from  '../../components/layout/SectionTitle'
import {useCounter} from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {
    const URI = "http://files.cod3r.com.br/curso-react/estados.json"
    const [counter, inc, dec] = useCounter(0)
    
    const reponse = useFetch(URI)

    function reponseMap(states){
        return states.map(state=> <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercicio #01"/>
                <div className="center">
                    <span className="text">
                        {counter}
                    </span>
                    <span>
                        <button className="btn"
                            onClick={()=> inc()}>+ 1</button>
                        <button className="btn"
                            onClick={()=> dec()}>- 1</button>
                    </span>
                </div>

            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <ul>{reponse.data ? reponseMap(reponse.data) : false}</ul>
            </div>

        </div>
    )
}

export default UseRef
