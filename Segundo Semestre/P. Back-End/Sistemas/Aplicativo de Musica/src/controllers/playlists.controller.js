const playlists = require("../data/playlists.data");

//req -> Request (Requisição)
//res -> Response (Resposta)

const listar = (req, res) => {
    res.status(200).send(playlists).end();
};

const buscar = (req, res) => {
    // /usuarios/id
    const idPlaylist = req.params.id;

    var user = "Não Encontrado 😢";

    playlists.forEach((playlist, index) => {
       if(playlist.id === idPlaylist) {
            user = playlist;
       } 
    });

    res.send(user).end();
};

const cadastrar = (req,res) => {
    const novaplaylist = req.body;
        playlists.push(novaplaylist); //se a musica que eu cadastrar não exixstir, nao efutua o cadastro
        res.status(201).send ("Cadastrado com sucesso 😊").end();
};

const apagar = (req, res) => {
    // /usuario/id -> parametro
    const idPlaylist = req.params.id;
    
    var indice = -1;
    playlists.forEach((playlist, index) => {
        if(playlist.id === idPlaylist) {
            indice = index;
        }
    });

    if(indice === -1) {
        res.status(404).end();
    }
    else {
        playlists.splice(indice,1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const playlistAlterada = req.body;

    var encontrei = false;

    playlists.forEach((playlist, index) => {
        if(playlist.id === playlistAlterada.id) {
            playlists[index] = playlistAlterada;
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
    const idPlaylist = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    playlists.forEach((playlist, index) => {
        if (playlist.id === idPlaylist) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    }
    else {
        Object.keys(novosDados).forEach((key) => {
        playlists[indice][key] = novosDados[key];
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