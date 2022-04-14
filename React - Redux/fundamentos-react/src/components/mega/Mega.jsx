import React,{useState} from "react";

import './Mega.css'


export default props =>{

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio) ? 
            gerarNumeroNaoContido(min, max, array) : 
            aleatorio
    }
    
    
    function geraNumeros(qtde){
        const numeros = Array(qtde)
        .fill(0).reduce((nums) =>{
            const novoNumero = gerarNumeroNaoContido(1, 60, nums);
            return [...nums, novoNumero]
        }, [])
        .sort((n1,  n2)=>n1-n2);
    
        return numeros
    }

    
    
    const [qtde, setQtde] = useState(props.qtde || 6);
    const numeroIniciais = geraNumeros(qtde);
    const [numeros, setNumero] = useState(numeroIniciais)


    return(
        <div>
            <h2>Mega Sena</h2>
            <div className="container-numeros">
                {numeros.map((Numero, i) => <span key={i} className="numeros">{Numero}</span>)}
            </div>
            {/* <h3 className="numeros" >{numeros.join(' ')}</h3> */}
            <div className="container-mega">
                <label>Qtde de Némeros</label>
                <input min="6" max="10" type="number" value={qtde} 
                onChange={e =>{
                    setQtde(+e.target.value)
                    setNumero(geraNumeros(+e.target.value))

                    }}/>
            </div>
            <button className="gerarNumeros" onClick={_=> setNumero(geraNumeros(qtde))}>
                Gerar Números
            </button>
        </div>
    );
}