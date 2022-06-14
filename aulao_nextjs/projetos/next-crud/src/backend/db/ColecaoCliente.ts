import firebase from "../config";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import { firestore } from "firebase-admin";

export default class ColecaoCliente implements ClienteRepositorio{
   
   #conversor = {
    toFirestore(cliente: Cliente){
        return{
            nome: cliente.nome,
            idade: cliente.idade,
        }
    },
    fromFirestore(snapshot: firestore.QueryDocumentSnapshot, options: firestore.QuerySnapshot): Cliente{
        const dados= snapshot.data(options)
        return new Cliente(dados.nome, dados.idade, snapshot.id)
    }
   }
   
   
    async salvar(cliente: Cliente): Promise<Cliente> {
        return null
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        return null
    }
    private colecao(){
        return firestore().collection('clentes').withConverter(this.#conversor)
    }

}