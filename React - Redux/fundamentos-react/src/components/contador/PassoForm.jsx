import React from 'react'
// "+" convert o numeor para inteiro
export default props => {
    return (
        <div>
            <label htmlFor="alterapasso">Numero: </label>
            <input id='alterapasso' value={props.passo} type="number" onChange={ e => props.setPasso(+e.target.value)} />
        </div>
    )
}