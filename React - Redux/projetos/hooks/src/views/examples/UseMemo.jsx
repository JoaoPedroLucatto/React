import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a, b){
   const future = Date.now() + 2000
   while(Date.now() < future){}//espera 2s
   return a + b
}
const UseMemo = (props) => {
    
    
    const [v1, setV1] = useState("")
    const [v2, setV2] = useState("")
    const [v3, setV3] = useState("")
    
    const result = useMemo((e) => {
        sum(v1, v2)
    },[v1, v2]);
    
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <input type="number" className="input" 
                value={v1}
                onChange={e=> setV1(parseInt(e.target.value))}/>

            <input type="number" className="input" 
                value={v2}
                onChange={e=> setV2(parseInt(e.target.value))}/>

            <input type="number" className="input" 
                value={v3}
                onChange={e=> setV3(parseInt(e.target.value))}/>

                <span className='text center red'>{result}</span>
        </div>
    )
}

export default UseMemo
