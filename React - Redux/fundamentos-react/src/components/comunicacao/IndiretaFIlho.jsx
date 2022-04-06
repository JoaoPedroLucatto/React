import React from 'react'

export default props =>{

    const randonIdade = () => parseInt(Math.random() * (20)) + 50;
    const randonNerd = () => Math.random()> 0.5;

    return(
        <div>
            <div>Filho</div>
            <button onClick={e =>{props.quandoClicar('joao', randonIdade(), randonNerd);}
            }>Fornecer Informações</button>
        </div>
    )
}