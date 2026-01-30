const db = require("../data/connection");

const ListarPosts = async (req, res) => {
    const posts = await db.query ("SELECT * FROM posts");
    res.status(200).send(posts[0]).end();
}

const CadastrarPost = async (req, res) => {
    const { id_usuario, titulo, conteudo } = req.body;
    const NovoPost = db.query ("INSERT INTO post VALUES (DEFAULT, ?, ?, ?);", titulo, conteudo, id_usuario);

    res.send ({
        id: NovoPost.insertId,
        titulo: titulo,
        conteudo: conteudo
    }).end();
};

module.exports = {
    ListarPosts
}
