import React from 'react'

export default (props) =>{
    const Nsorteado =parseInt(Math.random() * (props.max - props.min) + props.min);
    return(
        <div>
            <p>
                <strong>Número Mínimo: {props.min}</strong><br />
                <strong>Número Máximo: {props.max}</strong>
            </p>
            <p>Numero Sorteado foi {Nsorteado} </p>
        </div>
    )
}