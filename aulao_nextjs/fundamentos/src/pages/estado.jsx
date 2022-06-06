import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(props){

    const [numero, setNumero] = useState(0);
    

    function incrementar(){
        setNumero(numero + 1)
    }

    return(
        <Layout titulo='Estado no componente'>
            <div>
                {numero}
            </div>
            <button onClick={incrementar}>Imcrementar + 1</button>
        </Layout>
    )  

}