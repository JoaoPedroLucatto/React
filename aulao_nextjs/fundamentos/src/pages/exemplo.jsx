import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";


export default function Exemplo(){

    return(
        <Layout titulo='Mais um exemplo de componente'>
            <div>
                <Cabecalho titulo="React & Next.js"/>
                <Cabecalho titulo="venha apreender na prática !"/>
            </div>
        </Layout>
    )

}