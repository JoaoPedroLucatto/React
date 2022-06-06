import style from  '../styles/Estiloso.module.css'

import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso(){

    return(
        <Layout titule="teste">
            <div className={style.roxo}>
                <h1>Estilos Usando Css Modulos</h1>
            </div>
        </Layout>

    )

}