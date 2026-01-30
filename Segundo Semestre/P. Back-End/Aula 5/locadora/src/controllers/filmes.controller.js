const db = require("../datas/connection");

const ListarFilmes = async (req, res) => {
    const lista = await db.query("SELECT * FROM filmes");
    res.json(lista[0]).end();
}

const BuscarFilmes = async (req, res) => {
    const idFilme = req.params.id;
    const filme = await db.query("SELECT * FROM filmes WHERE id = " + idFilme);
    res.json(filme[0][0]).end;
}

const CadastrarFilme = async (req, res) => {
    const {titulo, categoria, preco} = req.body;
    const novoFilme = await db.query("INSERT INTO filmes VALUES (DEFAULT,?,?,?)", [titulo, categoria, preco]);
    const filme = {
        id: novoFilme[0].insertId,
        titulo: titulo,
        categoria: categoria,
        preco: preco
    }
    res.json(filme).status(202).end();
}

const ExcluirFilme = async (req, res) => {
    const idFilme = req.params.id;

    try {
        const apagarFilme = await db.query ("DELETE FROM filmes WHERE id = ?", [idFilme]);

        const info = {msg:""};

        if (apagarFilme[0].affectedRows === 1) {
            info.msg = "Excluido com sucesso";
        }
        
        else if (apagarFilme[0].affectedRows === 0) {
            info.msg = "Filme não encontrado";
        }

        res.status(200).json(info).end();

    } catch(error) {
        const info = {msg: ""};
        
        if (error.errno === 1451) {
            info.msg = "Filme alocado";
        }

        res.status(500).json(info).end();
    }
};

const AtualizarFilme = async (req,res) => {
    const {id, titulo, categoria, preco} = req.body;

    try {
        const atuliza = await db.query("UPDATE filmes SET titulo = ?, categoria = ?, preco = ? WHERE id = ?", [titulo, categoria, preco, id]);
        const info = {msg: ""};

        if(atuliza[0].affectedRows === 0) {
            info.msg = "Nenhum Filme encontrado";
        }
        else if(atuliza[0].affectedRows === 1) {
            info.msg = "Filme atualizado com sucesso";
        } 

        res.status(200).json(info).end();

    } catch(error) {
        console.log(error);
        res.status(500).end();
    }
};

const Faturamento_Categoria = async (req, res) => {
    const status = req.params.categoria;

    try {
        const BuscarLocacoes = await db.query("SELECT categoria, SUM(preco) AS Faturamento FROM filmes INNER JOIN locacoes ON filmes.id = locacoes.filme_id GROUP BY categoria;");

        res.status(200).json(BuscarLocacoes[0]).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Locações existentes";
        }
        res.status(500).json(info).end();
    }
};

module.exports = {
    ListarFilmes,
    BuscarFilmes, 
    CadastrarFilme,
    ExcluirFilme,
    AtualizarFilme, 
    Faturamento_Categoria
}

