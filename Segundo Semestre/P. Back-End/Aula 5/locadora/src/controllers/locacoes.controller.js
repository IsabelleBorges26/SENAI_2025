const db = require("../datas/connection");

const ListarLocacoes = async (req, res) => {
    const lista = await db.query("SELECT * FROM locacoes");
    res.json(lista[0]).end();
}

const BuscarLocacoes = async (req, res) => {
    const idLocacao = req.params.id;
    const locacao = await db.query("SELECT * FROM locacoes WHERE id = " + idLocacao);
    res.json(locacao[0][0]).end;
}

    const CadastrarLocacao = async (req, res) => {
        const { cliente_id, filme_id, data_locacao, status, preco } = req.body;
        try {
            const novoLocacao = await db.query("INSERT INTO locacoes VALUES (DEFAULT,?,?,?,?,?)", [cliente_id, filme_id, data_locacao, status, preco]);

            const Locacao = {
                id: novoLocacao[0].insertId,
                cliente_id: cliente_id,
                filme_id: cliente_id,
                data_locacao: data_locacao,
                status: status,
                preco: preco
            }
            res.json(Locacao).status(202).end();
        } catch (error) {
            const info = { msg: "" };
            if (error.errno === 1452) {
                info.msg = "Usuario ou Filme não existe";
            }

            res.status(500).json(info).end();
        }
    }

const ExcluirLocacao = async (req, res) => {
    const idLocacao = req.params.id;

    try {
        const apagarLocacao = await db.query("DELETE FROM locacoes WHERE id = ?", [idLocacao]);
        const info = { msg: "" };

        if (apagarLocacao[0].affectedRows === 1) {
            info.msg = "Excluido com sucesso";
        }

        else if (apagarLocacao[0].affectedRows === 0) {
            info.msg = "Locacao não encontrado";
        }

        res.status(200).json(info).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Locacao existente";
        }

        res.status(500).json(info).end();
    }
};

const AtualizarLocacao = async (req, res) => {
    const { id, cliente_id, filme_id, data_locacao, status, preco } = req.body;

    try {
        const atuliza = await db.query("UPDATE locacoes SET cliente_id = ?, filme_id = ?, data_locacao = ?, status = ?, preco = ? WHERE id = ?", [cliente_id, filme_id, data_locacao, status, preco, id]);
        const info = { msg: "" };

        if (atuliza[0].affectedRows === 0) {
            info.msg = "Nenhum Locacao encontrado";
        }
        else if (atuliza[0].affectedRows === 1) {
            info.msg = "Locacao atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

const Listar_locacoes_id = async (req, res) => {
    const cliente_id = req.params.id;

    try {
        const BuscarLocacoes = await db.query("SELECT * FROM locacoes WHERE cliente_id = ?", [cliente_id]);

        res.status(200).json(BuscarLocacoes[0]).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Cliente existente";
        }
        res.status(500).json(info).end();
    }
};

const Listar_locacoes_status = async (req, res) => {
    const status = req.params.status;

    try {
        const BuscarLocacoes = await db.query("SELECT * FROM locacoes WHERE status = ?", [status]);

        res.status(200).json(BuscarLocacoes[0]).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Locações existentes";
        }
        res.status(500).json(info).end();
    }
};

const Faturamento = async (req, res) => {
    const preco = req.params.preco

    try {
        const Calcular = await db.query ("SELECT SUM(preco) AS Faturamento FROM locacoes");

        res.json(Calcular[0]).end(); 
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Faturamento total";
        }
        res.status(500).json(info).end();
    }
};

const Faturamento_status = async (req, res) => {
    const status = req.params.status;

    try {
        const BuscarLocacoes = await db.query("SELECT locacoes.status, SUM(filmes.preco) AS Faturamento FROM filmes INNER JOIN locacoes ON filmes.id = locacoes.filme_id GROUP BY locacoes.status");

        res.status(200).json(BuscarLocacoes[0]).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Locações existentes";
        }
        res.status(500).json(info).end();
    }
};

const Faturamento_mes = async (req, res) => {
    const status = req.params.data_locacao;

    try {
        const BuscarLocacoes = await db.query("SELECT MONTH(locacoes.data_locacao) AS Mês, SUM(filmes.preco) AS Faturamento FROM filmes INNER JOIN locacoes ON filmes.id = locacoes.filme_id GROUP BY MONTH (locacoes.data_locacao) ORDER BY Mês;");

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
    ListarLocacoes,
    BuscarLocacoes,
    CadastrarLocacao,
    ExcluirLocacao,
    AtualizarLocacao,
    Listar_locacoes_id,
    Listar_locacoes_status,
    Faturamento,
    Faturamento_status,
    Faturamento_mes
};

