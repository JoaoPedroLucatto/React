import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
export default function CodigoProClinte(props){

    const router = useRouter()

    return(
        <Layout titule='Navegacao Dinânmica'>
            <div>
                {router.query.codigo}
            </div>
            <div>
                {router.query.filial}
            </div>
        </Layout>           
    )
}