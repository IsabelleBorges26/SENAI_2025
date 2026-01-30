const playlistmusicas = require("../data/playlistmusicas.data");
const musicas = require("../data/musicas.data");
const playlists = require("../data/playlists.data");

//req -> Request (Requisição)
//res -> Response (Resposta)

const listar = (req, res) => {
    res.status(200).send(playlistmusicas).end();
};

const buscar = (req, res) => {
    // /usuarios/id
    const idPlaylistmusicas = req.params.id;

    var user = "Não Encontrado 😢";

    playlistmusicas.forEach((playlistmusica, index) => {
       if(playlistmusica.id === idPlaylistmusicas) {
            user = playlistmusica;
       } 
    });

    res.send(user).end();
};

const cadastrar = (req,res) => {
    const novaplaylistmusica = req.body;
    var musicaexiste = false;
     var playlistexiste = false;
    
    playlists.forEach((playlist, index) => {
        if (playlist.id === novaplaylistmusica.playlist_id) playlistexiste = true;
    }); 

    musicas.forEach((musica, index) => {
        if (musica.id === novaplaylistmusica.musica_id) musicaexiste = true;
    }); 

    if(musicaexiste === true && playlistexiste === true) {
        playlistmusicas.push(novaplaylistmusica); //se a musica que eu cadastrar não exixstir, nao efutua o cadastro
        res.status(201).send ("Cadastrado com sucesso 😊").end();
    }else {
        res.status(404).end();
    }

};

const apagar = (req, res) => {
    // /usuario/id -> parametro
    const idPlaylistmusicas = req.params.id;
    
    var indice = -1;
    playlistmusicas.forEach((playlistmusica, index) => {
        if(playlistmusica.id === idPlaylistmusicas) {
            indice = index;
        }
    });

    if(indice === -1) {
        res.status(404).end();
    }
    else {
        playlistmusicas.splice(indice,1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const playlistmusicaAlterada = req.body;

    var encontrei = false;

    playlistmusicas.forEach((playlistmusica, index) => {
        if(playlistmusica.id === playlistmusicaAlterada.id) {
            playlistmusicas[index] = playlistmusicaAlterada;
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
    const idPlaylistmusicas = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    playlistmusicas.forEach((playlistmusica, index) => {
        if (playlistmusica.id === idPlaylistmusicas) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    }
    else {
        Object.keys(novosDados).forEach((key) => {
        playlistmusicas[indice][key] = novosDados[key];
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