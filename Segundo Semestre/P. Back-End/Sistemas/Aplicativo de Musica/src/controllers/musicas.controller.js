const musicas = require("../data/musicas.data");

//req -> Request (Requisição)
//res -> Response (Resposta)

const listar = (req, res) => {
    res.status(200).send(musicas).end();
};

const buscar = (req, res) => {
    // /usuarios/id
    const idMusica = req.params.id;

    var user = "Não Encontrado 😢";

    musicas.forEach((musica, index) => {
       if(musica.id === idMusica) {
            user = musica;
       } 
    });

    res.send(user).end();
};

const cadastrar = (req,res) => {
    const novamusica = req.body;
    musicas.push(novamusica);
    res.status(201).send ("Cadastrado com sucesso 😊").end();
};

const apagar = (req, res) => {
    // /usuario/id -> parametro
    const idMusica = req.params.id;
    
    var indice = -1;
    musicas.forEach((musica, index) => {
        if(musica.id === idMusica) {
            indice = index;
        }
    });

    if(indice === -1) {
        res.status(404).end();
    }
    else {
        musicas.splice(indice,1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const musicaAlterada = req.body;

    var encontrei = false;

    musicas.forEach((musica, index) => {
        if(musica.id === musicaAlterada.id) {
            musicas[index] = musicaAlterada;
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
    const idMusica = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    musicas.forEach((musica, index) => {
        if (musica.id === idMusica) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    }
    else {
        Object.keys(novosDados).forEach((key) => {
        musicas[indice][key] = novosDados[key];
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