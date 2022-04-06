import React from 'react'

export default props =>{
    return(
        <div>
            <span>{props.nome}</span>
            <span><strong>{props.idade}</strong></span>
            <span><strong>{props.nerd ? 'Verdadeiro' : 'Falso'} !</strong></span>
        </div>
    )
}