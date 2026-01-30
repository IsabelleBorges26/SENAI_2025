const db = require("../data/connection")

const listarOficinas = async(req, res) => {
    const oficina = await db.query("SELECT * FROM oficinas");
    res.status(200).send(oficina[0]).end();
};

const cadastrarOficina = async (req, res) => {
    const { nome, categoria, vagas } = req.body;

      if (nome == "" || categoria == "" || vagas == "") {
        return res.status(400).json("Invalido, esta faltando coisa!");
    }

        if (vagas < 1) {
        return res.status(400).json({ erro: "Tem que ser maior que 1!" });
    }

    const novaOficina = await db.query(
        "INSERT INTO oficinas VALUES (DEFAULT, ?, ?, ?);",
        [nome, categoria, vagas]
    ); 

    res.send({
        id: novaOficina[0].insertId,
        name: nome,          
        categoria: categoria,
        vagas: vagas
    }).end();
};

const excluirOfic = async (req, res) => {
    const idOfc = req.params.id;

    try {
        const delofc = await db.query("DELETE FROM oficinas WHERE id = ?", [idOfc]);

        const info = { msg: "" };

        if (delofc[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else {
            info.msg = "Oficina não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Oficina com inscricoes";
        }

        res.status(500).json(info).end();
    }
};

const atualizarOfic = async (req, res) => {
    const { id, nome, categoria, vagas } = req.body;

    try {
        const atualiza = await db.query(
            "UPDATE oficinas SET nome = ?, categoria = ?, vagas = ? WHERE id = ?",
            [nome, categoria, vagas, id]
        );

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhuma oficina encontrado";
        } else {
            info.msg = "Oficina atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

module.exports = {
    listarOficinas,
    cadastrarOficina,
    excluirOfic,
    atualizarOfic
}
