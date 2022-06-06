import Layout from "../components/Layout";

export function getServerSideProps(){
    return{
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico(props){
    return(
        <Layout titulo="Compenente Dinâmico">   
            <div>{props.numero}</div>
        </Layout>
    )
}