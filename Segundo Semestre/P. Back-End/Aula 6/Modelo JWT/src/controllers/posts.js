const db = require("../data/connection");

const ListarPosts = async (req, res) => {
    const posts = await db.query ("SELECT * FROM posts");
    res.status(200).send(posts[0]).end();
}

const CadastrarPost = async (req, res) => {
    const { titulo, conteudo } = req.body;
    const id_usuario = req.headers['user'].id;
    const NovoPost = await db.query ("INSERT INTO posts VALUES (DEFAULT, ?, ?, ?);", [titulo, conteudo, id_usuario]);

    res.send ({
        id: NovoPost[0].insertId,
        titulo: titulo,
        conteudo: conteudo
    }).end();
};

const ExcluirPost = async (req, res) => {
    const idPost = req.params.id;

    try {
        const apagarPost = await db.query("DELETE FROM posts WHERE id = ?", [idPost]);
        const info = { msg: "" };

        if (apagarPost[0].affectedRows === 1) {
            info.msg = "Excluido com sucesso";
        }

        else if (apagarPost[0].affectedRows === 0) {
            info.msg = "Post não encontrado";
        }

        res.status(200).json(info).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Post existente";
        }

        res.status(500).json(info).end();
    }
};

const AtualizarPost = async (req, res) => {
    const { titulo, conteudo, id } = req.body;

    try {
        const atuliza = await db.query("UPDATE posts SET titulo = ?, conteudo = ? WHERE id = ?", [titulo, conteudo, id]);
        const info = { msg: "" };

        if (atuliza[0].affectedRows === 0) {
            info.msg = "Nenhum Post encontrado";
        }
        else if (atuliza[0].affectedRows === 1) {
            info.msg = "Post atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

module.exports = {
    ListarPosts,
    CadastrarPost,
    ExcluirPost,
    AtualizarPost
}
