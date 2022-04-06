import React, {useState} from 'react'

export default props =>{


    const [valor, setValor] = useState('Inicial');

    function changeValue(e){
        setValor(e.target.value);
    }


    return(
        <div>
            <h2>{valor}</h2>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input value={valor} onChange={changeValue} />
                <input value={valor} readOnly/>  {/* MÃO CONSEGUE ALTERAR */}
                <input value={undefined}/> {/* NÃO HÁ NENHUMA VINCULAÇÃO COM "ESTADO" */}
            </div>
            
        </div>
    )
}