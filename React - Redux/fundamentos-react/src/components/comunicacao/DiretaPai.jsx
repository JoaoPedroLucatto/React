import React from 'react'

import DiretaFilho from './DiretaFilho'

export default props =>{
    return(
        <div>
            <DiretaFilho nome="João Pedro" idade={23} nerd={false}/>
            <DiretaFilho nome="João Victor" idade={30} nerd={true}/>
        </div>
    )
}