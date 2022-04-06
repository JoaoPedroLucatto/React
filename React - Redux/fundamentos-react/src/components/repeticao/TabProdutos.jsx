import React from 'react'

import '../layout/Tab.css'

import Produto from '../../data/produtos'

export default (props)=>{

    const tabProdutos = Produto.map((produto, i) => {
        return(
            <tr  key={produto.id} className = {i % 2 == 0 ? 'par' : 'impar'}>
                <td>
                    {produto.id}
                </td>
                <td>
                    {produto.nome}
                </td>
                <td>
                    {produto.preco.toFixed(2).replace('.', ',')}
                </td>
            </tr>
        )
    })

    return(
        <table className="table">
            <thead>

                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Produto
                    </th>
                    <th>
                        Preço
                    </th>
                </tr>

            </thead>
            <tbody>
                
                {tabProdutos}

            </tbody>

        </table>
    )


}