const db = require("../data/connection")

const listarAlunos = async(req, res) => {
    const lista = await db.query("SELECT * FROM alunos");
    res.json(lista[0]).end();
};

const cadastrarAluno = async (req, res) => {
    const { nome, turma } = req.body;

    if (nome == "" || turma == "") {
        return res.status(400).json("Invalido, esta faltando coisa!");
    }

    const novoAluno = await db.query("INSERT INTO alunos VALUES (DEFAULT, ?, ?)", [nome, turma]); 

    res.send({
        id: novoAluno[0].insertId,    
        nome: nome,
        turma: turma
    }).end();
};

const excluirAluno = async (req, res) => {
    const idAlu = req.params.id;

    try {
        const delAlu = await db.query("DELETE FROM alunos WHERE id = ?", [idAlu]);

        const info = { msg: "" };

        if (delAlu[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else if (delAlu[0].affectedRows === 0) {
            info.msg = "Aluno não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Aluno inscrito em oficina";
        }

        res.status(500).json(info).end();
    }
};

const atualizarAluno = async (req, res) => {
    const { id, nome, turma } = req.body;

    try {
        const atualiza = await db.query(
            "UPDATE alunos SET nome = ?, turma = ? WHERE id = ?",
            [nome, turma, id]
        );

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhum aluno encontrado";
        } else if (atualiza[0].affectedRows === 1) {
            info.msg = "Aluno atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

module.exports = {
    listarAlunos,
    cadastrarAluno,
    excluirAluno,
    atualizarAluno
}
