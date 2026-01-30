const db = require("../data/connection")

const listarInscricoes = async(req, res) => {
    const inscricao = await db.query ("SELECT * FROM inscricoes");
    res.status(200).send(inscricao[0]).end();
};

const cadastrarInscricao = async (req, res) => {
    const { id_aluno, id_oficina, data_inscricao } = req.body;

    if (id_aluno == "" || id_oficina == "" || data_inscricao == "") {
        return res.status(400).json("Invalido, esta faltando coisa!");
    }

    const aluno = await db.query("SELECT * FROM alunos WHERE id = ?", [id_aluno]);
    if (aluno[0].length === 0) {
        return res.status(400).json({ msg: "Aluno não encontrado" });
    }

    const oficina = await db.query("SELECT * FROM oficinas WHERE id = ?", [id_oficina]);
    if (oficina[0].length === 0) {
        return res.status(400).json({ msg: "Oficina não encontrada" });
    }

    const novaInscricao = await db.query(
        "INSERT INTO inscricoes VALUES (DEFAULT, ?, ?, ?)",
        [data_inscricao, id_aluno, id_oficina]
    );

    res.send({
        id: novaInscricao[0].insertId,    
        id_aluno,
        id_oficina,
        data_inscricao
    }).end();
};


const excluiInscricao = async (req, res) => {
    const idIns = req.params.id;

    try {
        const delIns = await db.query("DELETE FROM inscricoes WHERE id = ?", [idIns]);

        const info = { msg: "" };

        if (delIns[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else if (delIns[0].affectedRows === 0) {
            info.msg = "Inscricao não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

const atualizarInscricao = async (req, res) => {
    const { id, id_aluno, id_oficina, data_inscricao } = req.body;

    try {
        const atualiza = await db.query(
            "UPDATE inscricoes SET id_aluno = ?, id_oficina = ?, data_inscricao = ? WHERE id = ?",
            [id_aluno, id_oficina, data_inscricao, id]
        );

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhuma inscricao encontrado";
        } else if (atualiza[0].affectedRows === 1) {
            info.msg = "Inscricao atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

const relatorioInsPorOfic = async (req, res) => {
  try {
    const resultado = await db.query(`
      SELECT oficinas.nome, COUNT(inscricoes.id) AS total_inscritos
      FROM oficinas
      LEFT JOIN inscricoes ON oficinas.id = inscricoes.id_oficina
      GROUP BY oficinas.nome
    `);

    res.status(200).json(resultado[0]);
  } catch (error) {
    console.error("Erro ao gerar relatório por oficina:", error);
    res.status(500).json({ erro: "Erro interno ao gerar relatório por oficina" });
  }
};

const relatorioInsPorCat = async (req, res) => {
  try {
    const resultado = await db.query(`
      SELECT oficinas.categoria, COUNT(inscricoes.id) AS total_inscritos
      FROM oficinas
      LEFT JOIN inscricoes ON oficinas.id = inscricoes.id_oficina
      GROUP BY oficinas.categoria
    `);

    res.status(200).json(resultado[0]);
  } catch (error) {
    console.error("Erro ao gerar relatório por categoria:", error);
    res.status(500).json({ erro: "Erro interno ao gerar relatório por categoria" });
  }
};

module.exports = {
    listarInscricoes,
    cadastrarInscricao,
    excluiInscricao,
    atualizarInscricao,
    relatorioInsPorOfic,
    relatorioInsPorCat
}
