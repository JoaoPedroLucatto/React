import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    produts: [],
    user: [],
    number:0
}


function reducer(state, action){
    switch(action.type){
        case 'addnumber':
            return {...state, number: state.number + parseInt(action.value2)}
        case 'login':
            return{...state, user: {name: action.name, idade: action.idade}}
        case 'multiply7':
            return{...state, number: state.number * 7}
        case 'divide25':
            return{...state, number: state.number / 25}
        case 'parseInt':
            return{...state, number: parseInt(state.number)}
        default: 
            return state
    }
}


const UseReducer = (props) => {

    const [state, dispatch] = useReducer( reducer, initialState)

    const [number2, setNumber2] = useState("2")

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user.name ?
                    <span className='text'>{state.user.name}, idade: {state.user.idade}</span>
                    : <span className='text'>Sem usuário !</span>
                }

                <span className="text">{state.number ? state.number : '' }</span>
                <span>
                    <button className="btn"
                        onClick={() => dispatch({type: 'addnumber', value2 : number2})}>+ {number2 ? number2 : '2'}</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'login', name: 'João Pedro', idade: '23'})}>Login</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'multiply7'})}>x 7</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'divide25'})}> / 25</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'parseInt'})}>Inteiro</button>
                    <input type="number" min="1" className="text"  value={number2}
                        onChange={(e) => {
                                setNumber2(e.target.value)
                               ///dispatch({type: 'addnumber', value2: number2})
                                }} />
                </span>    
            </div>
            
        </div>
    )
}

export default UseReducer
