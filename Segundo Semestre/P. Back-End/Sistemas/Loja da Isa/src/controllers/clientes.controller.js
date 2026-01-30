const clientes = require("..//data/clientes.data");

const buscar = (req, res) => {
 
    const cpfCliente = req.params.cpf;

    var user = "Não Encontrado 😢";

    clientes.forEach((cliente, index) => {
       if(cliente.cpf === cpfCliente) {
            user = cliente;
       } 
    });

    res.send(user).end();
};

const cadastrar = (req,res) => {
    const novoCliente = req.body;

        if (req.body.cpf === "") {
            res.status(404).send ("Não cadastrado, falta o CPF 😢").end();
        } else {
            clientes.push(novoCliente);
            res.status(201).send ("Cadastrado com sucesso 😊").end();
        }

};



module.exports = {
    buscar,
    cadastrar
};
