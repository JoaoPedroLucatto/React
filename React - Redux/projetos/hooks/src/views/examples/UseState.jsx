import React, { useState } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'
import PageTitle from '../../components/layout/PageTitle'


const UseState = (props) => {
    
    const [count, setcount] = useState(0)
    const [name, setName] = useState("")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exericio #01"/>
                <div className="center">
                    <span className='text'>{count}</span>
                    <div>
                        <button className="btn"
                            onClick={() => setcount(count - 1)}>-1</button>

                        <button className="btn"
                            onClick={() => setcount(count + 1)}>+1</button>

                        <button className="btn"
                            onClick={() => setcount(current => current + 1000)}>+1000</button> {/* PASSANDO UMA FUNÇÃO PARA O setcount ELE RETORNAR O VALO ATUAL do count */}
                    </div>
                </div>

            <SectionTitle title="Exericio #02"/>
                <input type="text" className='input' value={name}
                    onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default UseState
