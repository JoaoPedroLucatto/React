import React, { useEffect, useRef, useState } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'
import PageTitle from '../../components/layout/PageTitle'

const merge = function (s1, s2){
    return [...s1].map((e, i) =>
        `${e}${s2[i] || ""}`
    ).join("")
}


const UseRef = (props) => {

    const [value1, setvalue1] = useState("")
    const [value2, setvalue2] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(0)
    const myInput2 = useRef(0)


    
    useEffect(function(){
        count.current++
        myInput2.current.focus();
    },[value1])
    

    useEffect(function(){
        count.current++
        myInput1.current.focus()
    },[value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio #01"/>
                <div className="center">
                    <div>
                        <span className='text'>Valor: </span>
                        <span className='text'>{merge(value1, value2)} [</span>
                        <span className="text red">{count.current}</span>
                        <span className='text'>]</span>

                    </div>
                    <input type="text" className="input"
                        ref={myInput1} 
                        value={value1} 
                        onChange={e => setvalue1(e.target.value)}/>
                </div>

            <SectionTitle title="Exercicio #01"/>
                <div className='center'>
                <input type="text" className="input" 
                        ref={myInput2} 
                        value={value2} 
                        onChange={e => setvalue2(e.target.value)}/>
                </div>
        </div>
    )
}

export default UseRef
