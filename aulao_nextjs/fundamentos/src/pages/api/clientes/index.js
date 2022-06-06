export default function Clientes(req, res){
    if(req.method === 'GET'){
        HandlerGET(req, res)
    }else{
        res.status(405).send()
    }

}

function HandlerGET(req, res){
    res.status(200).json({
        name: 'joao pedro',
        email: 'joaolucatto@gmail.com'
    })
    console.log(req)
}