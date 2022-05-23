import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'
import {AppContext} from '../../data/Store'



const UseContext = (props) => {

    const context = useContext(DataContext)

    function addNumber(delta){
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    const store = useContext(AppContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exericio #01"/>
                <span className="center">{context.state.text}</span>
                <span className="center">{context.state.number}</span>
                <div className="center">
                    <span>
                        <button className="btn"
                            onClick={ ()=> addNumber(1) }>+1</button>
                        <button className="btn"
                            onClick={ ()=> addNumber(-1) }>-1</button>
                    </span>
                </div>
            
            <SectionTitle title="Exericio #02"/>
            <span className="center">{store.text}</span>
            <span className="center">{store.number}</span>
            <div className="center">
                <span>
                    <button className="btn"
                        onClick={ () => store.setNumber(store.number + 1) }>+1</button>
                    <button className="btn"
                        onClick={ () => store.setNumber(store.number - 1) }>-1</button>
                </span>
            </div>
        </div>

        
    )
}

export default UseContext
