export default function Handler(req, res){
    const codigo = req.query.codigo;

    res.status(200).json({
        id: codigo,
        name: `Joao pedro ${codigo}`,
        email: `joaopedro.ayruth.lucatto${codigo}@gmail.com`
    })
}