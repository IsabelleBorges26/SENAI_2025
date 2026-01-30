const clientes = require("../data/clientes");

const listar = (req, res) => {
    res.status(200).send(clientes).end();
};

const cadastrar = (req,res) => {
    const novoCliente = req.body;
    clientes.push(novoCliente);
    res.status(201).send ("Cadastrado com sucesso 😊").end();
};

const atualizar = (req, res) => {
    const idCliente = req.params.id;
    const novosDados = req.body;

    var indice = -1;
    clientes.forEach((cliente, index) => {
        if (cliente.id === idCliente) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    }
    else {
        Object.keys(novosDados).forEach((key) => {
        clientes[indice][key] = novosDados[key];
    });

    res.status(204).end();
    }
};

module.exports = {
    listar, //
    cadastrar, //
    atualizar //
};