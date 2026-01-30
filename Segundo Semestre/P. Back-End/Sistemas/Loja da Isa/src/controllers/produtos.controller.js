const produtos = require("..//data/produtos.data");

const buscar = (req, res) => {

    const idProduto= req.params.id;

    var user = "Não Encontrado 😢";

    produtos.forEach((produto, index) => {
       if(produto.id === idProduto) {
            user = produto;
       } 
    });

    res.send(user).end();
};

const cadastrar = (req,res) => {
    const novoProduto= req.body;
    produtos.push(novoProduto);
    res.status(201).send ("Cadastrado com sucesso 😊").end();
};

const apagar = (req, res) => {

    const idProduto= req.params.id;
    
    var indice = -1;
    produtos.forEach((produto, index) => {
        if(produto.id === idProduto) {
            indice = index;
        }
    });

    if(indice === -1) {
        res.status(404).end();
    }
    else {
        produtos.splice(indice,1);
        res.status(204).end();
    }
};


const atualizar = (req, res) => {
    const idProduto= req.params.id;
    const novosDados = req.body;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if (produto.id === idProduto) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    }
    else {
        Object.keys(novosDados).forEach((key) => {
        produtos[indice][key] = novosDados[key];
    });

    res.status(204).end();
    }
};


module.exports = {
    buscar,
    cadastrar,
    apagar,
    atualizar
};