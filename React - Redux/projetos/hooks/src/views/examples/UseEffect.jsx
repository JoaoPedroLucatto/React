import React, { useEffect, useState } from 'react'
import SectionTitle from '../../components/layout/SectionTitle';
import PageTitle from '../../components/layout/PageTitle'


function calcularFatorial(num){
    const n = parseInt(num);
    if(isNaN(n)) return -1
    if(n < 0 ) return -1
    if(n === 0 ) return 1
    return calcularFatorial(n - 1) * n
}

function verificarNumber(num){
    const n = parseInt(num);
    if(isNaN(n)) return -1
    if(n % 2 == 0) return 0
    return 1  
}


const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [numberImparPar, setImparPar] = useState("")
    const [verificImparPar, SetVerificaImparPar] =  useState("");

    useEffect(function(){
        setFatorial(calcularFatorial(number));
    }

    ,[number])

    useEffect(function(){
        SetVerificaImparPar(verificarNumber(numberImparPar))
    },[numberImparPar])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01"/>
                <div className='center'>
                    <div>
                        <span className='text red'>Fatorial: </span>
                        <span className='text'>{fatorial === -1 ? 'Não existe' : fatorial}</span>
                    </div>
                <input type="number" className="input" value={number}  
                    onChange={(e) => setNumber(e.target.value)}/>
                </div>
            
            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <div>
                    <span className='text red'>Número {numberImparPar}: </span>
                    <span className='text'>{verificImparPar === 0 ? 'Par' : 'Impar'}</span>
                </div>
                <input type="number" className="input" value={numberImparPar} 
                onChange={(e) => setImparPar(e.target.value)}/>
            </div>
        </div>

    )
}

export default UseEffect
