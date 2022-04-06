import React, {useState} from 'react'

import IndiretaFIlho from './IndiretaFIlho'

export default props =>{

    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState('0');
    const [nerd, setNerd] = useState(true);

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
        
    }



    return(
        <div>
            <div>Pai</div>
            <span>{nome} </span>
            <span><strong>{idade} </strong></span>
            <span> {nerd ? 'Verdadeiro': 'False'}</span>
            <IndiretaFIlho quandoClicar={fornecerInformacoes}/>
        </div>

    )
}