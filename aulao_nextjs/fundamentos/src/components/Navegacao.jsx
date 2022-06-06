import style from '../styles/Navegacao.module.css'

import Link from 'next/link'

export default function Nevagacao(props){
    return(
            <Link href={props.caminho}>
                <div className={style.navegador} style={{
                    backgroundColor: props.cor ?? '#0707e9'
                }}>
                    {props.texto}
                </div>
            </Link>
    )
}