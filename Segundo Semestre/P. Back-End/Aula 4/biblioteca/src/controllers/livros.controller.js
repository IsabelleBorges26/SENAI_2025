const livros = require("..//data/livros.data");

//req -> Request (Requisição)
//res -> Response (Resposta)

const listar = (req, res) => {
    res.status(200).send(livros).end();
};

const buscar = (req, res) => {
    // /usuarios/id
    const idLivro = req.params.id;

    var user = "Não Encontrado 😢";

    livros.forEach((livro, index) => {
       if(livro.id === idLivro) {
            user = livro;
       } 
    });

    res.send(user).end();
};

const cadastrar = (req,res) => {
    const novoLivro = req.body;
    livros.push(novoLivro);
    res.status(201).send ("Cadastrado com sucesso 😊").end();
};

const apagar = (req, res) => {
    // /usuario/id -> parametro
    const idLivro = req.params.id;
    
    var indice = -1;
    livros.forEach((livro, index) => {
        if(livro.id === idLivro) {
            indice = index;
        }
    });

    if(indice === -1) {
        res.status(404).end();
    }
    else {
        livros.splice(indice,1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const livroAlterado = req.body;

    var encontrei = false;

    livros.forEach((livro, index) => {
        if(livro.id === livroAlterado.id) {
            livros[index] = livroAlterado;
            encontrei = true;
        }
    });

    if(encontrei === false) {
        res.status(404).end();
    }
    else {
        res.status(201).end();
    }
};

const atualizar = (req, res) => {
    const idLivro = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    livros.forEach((livro, index) => {
        if (livro.id === idLivro) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    }
    else {
        Object.keys(novosDados).forEach((key) => {
        livros[indice][key] = novosDados[key];
    });

    res.status(204).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    alterar,
    atualizar
};