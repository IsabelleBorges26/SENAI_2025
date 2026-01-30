const pedidos = require("..//data/pedidos.data");


const listar = (req, res) => {
    res.status(200).send(pedidos).end();
};

const buscar = (req, res) => {
    // /pedidos/id
    const idPedido = req.params.id;

    var user = "Não Encontrado 😢";

    pedidos.forEach((pedido, index) => {
       if(pedido.id === idPedido) {
            user = pedido;
       } 
    });

    res.send(user).end();
};

const cadastrar = (req,res) => {
    const novoPedido = req.body;
    
   if (req.body.quantidade <= 0) {
            res.status(404).send ("Quantidade invalida 😢").end();
        } else {
            pedidos.push(novoPedido);
            res.status(201).send ("Cadastrado com sucesso 😊").end();
        }
};


const atualizar = (req, res) => {
    const idPedido = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    pedidos.forEach((pedido, index) => {
        if (pedido.id === idPedido) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    }
    else {
        Object.keys(novosDados).forEach((key) => {
        pedidos[indice][key] = novosDados[key];
    });

    res.status(204).end();
    }
};


module.exports = {
    listar,
    buscar,
    cadastrar,
    atualizar
};