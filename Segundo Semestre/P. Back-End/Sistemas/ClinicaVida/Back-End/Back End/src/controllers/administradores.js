const jsonwebtoken = require("jsonwebtoken");
const db = require ("../data/connection");
const crypto = require('node:crypto');

const Login = async (req, res) => {
    const { user, psw } = req.body;

    try {
        const SenhaHash = crypto.createHash("MD5").update(psw).digest("hex").toString();
        const Usuario = await db.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?;", [user, SenhaHash]);

        if (Usuario[0].length == 0) {
            res.status(401).send({ message: "E-mail ou senha incorretos!" });
            return;
        }

        const token = jsonwebtoken.sign(
            {
                id: Usuario[0][0].id,
                name: Usuario[0][0].nome,
                email: Usuario[0][0].email,
                cargo: Usuario[0][0].cargo
            },
            process.env.SECRET_JWT,
            { expiresIn: "60min" }
        );

        res.status(200).json({ token: token }).end();
    } catch (err) {
        res.status(500).send(err).end();
    }
};

const CadastrarUsuario = async (req, res) => {
    const { nome, email, senha, cargo } = req.body;

    const NovaSenha = crypto.createHash("md5").update(senha).digest("hex").toString();

    const NovoUsuario = await db.query("INSERT INTO usuarios VALUES (DEFAULT, ?, ?, ?, ?);", [nome, email, NovaSenha, cargo]);

    res.send({
        id: NovoUsuario[0].insertId,
        nome: nome,
        email: email,
        cargo: cargo
    }).end();
};

const CadastrarPaciente = async (req, res) => {
    const { nome, senha, telefone } = req.body;

    const NovaSenha = crypto.createHash("md5").update(senha).digest("hex").toString();

    const NovoPaciente = await db.query("INSERT INTO pacientes VALUES (DEFAULT, ?, ?, ?);", [nome, NovaSenha, telefone]);

    res.send({
        id: NovoPaciente[0].insertId,
        nome: nome,
        telefone: telefone
    }).end();
};

const CadastrarConsulta = async (req, res) => {
    const { paciente_id, medico_id, data_hora, status } = req.body;

    try {
        const hoje = new Date();
        const data = new Date(data_hora);

        if (data < hoje) {
            return res.status(400).json({ message: "Não é permitido agendar consultas em datas passadas." });
        }

        const VerificaDuplicada = await db.query(
            "SELECT * FROM consultas WHERE paciente_id = ? AND medico_id = ? AND DATE(data_hora) = DATE(?);",
            [paciente_id, medico_id, data]
        );

        if (VerificaDuplicada[0].length > 0) {
            return res.status(400).json({ message: "Já existe uma consulta entre esse paciente e médico nesse dia." });
        }

        const NovaConsulta = await db.query(
            "INSERT INTO consultas VALUES (DEFAULT, ?, ?, ?, ?);",
            [paciente_id, medico_id, data, status]
        );

        return res.send({
            id: NovaConsulta[0].insertId,
            paciente_id,
            medico_id,
            data_hora: data,
            status,
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};


const ExcluirUsuarios = async (req, res) => {
    const idUser = req.params.id;

    try {
        const apagarUsuario = await db.query("DELETE FROM usuarios WHERE id = ?", [idUser]);
        const info = { msg: "" };

        if (apagarUsuario[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else {
            info.msg = "Usuário não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        res.status(500).json({ msg: "Erro ao excluir usuário" }).end();
    }
};

const ExcluirPacientes = async (req, res) => {
    const idPaciente = req.params.id;

    try {
        const apagarPaciente = await db.query("DELETE FROM pacientes WHERE id = ?", [idPaciente]);
        const info = { msg: "" };

        if (apagarPaciente[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else {
            info.msg = "Paciente não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        res.status(500).json({ msg: "Erro ao excluir paciente" }).end();
    }
};

const ExcluirConsultas = async (req, res) => {
    const idConsulta = req.params.id;

    try {
        const apagarConsulta = await db.query("DELETE FROM consultas WHERE id = ?", [idConsulta]);
        const info = { msg: "" };

        if (apagarConsulta[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else {
            info.msg = "Consulta não encontrada";
        }

        res.status(200).json(info).end();
    } catch (error) {
        res.status(500).json({ msg: "Erro ao excluir consulta" }).end();
    }
};

const AtualizarConsultas = async (req, res) => {
    const { id, paciente_id, medico_id, data_hora, status } = req.body;

    try {
        const atualiza = await db.query(
            "UPDATE consultas SET paciente_id = ?, medico_id = ?, data_hora = ?, status = ? WHERE id = ?",
            [paciente_id, medico_id, data_hora, status, id]
        );

        if (atualiza[0].affectedRows === 0) {
            return res.status(404).json({ message: "Nenhuma consulta encontrada" });
        }

        return res.status(200).json({ message: "Consulta atualizada com sucesso" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};

const ListarUsuarios = async (req, res) => {
    const lista = await db.query("SELECT * FROM usuarios");
    res.json(lista[0]).end();
};

const ListarPacientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM pacientes");
    res.json(lista[0]).end();
};

const ListarConsultas = async (req, res) => {
    const lista = await db.query("SELECT * FROM consultas");
    res.json(lista[0]).end();
};

const Relatorios = async (req, res) => {
    try {

    const consultasPorEspecialidade = await db.query(
        "SELECT medicos.especialidade, COUNT(consultas.id) AS total FROM consultas INNER JOIN medicos ON consultas.medico_id = medicos.id GROUP BY medicos.especialidade"
        );
        const pacientesPorMedico = await db.query(
        "SELECT medicos.nome AS medico, COUNT(consultas.paciente_id) AS total FROM consultas INNER JOIN medicos ON consultas.medico_id = medicos.id GROUP BY medicos.nome"
        );

        const listaGeral = await db.query(
        "SELECT consultas.id, pacientes.nome AS paciente, medicos.nome AS medico, medicos.especialidade, consultas.data_hora, consultas.status FROM consultas INNER JOIN pacientes ON consultas.paciente_id = pacientes.id INNER JOIN medicos ON consultas.medico_id = medicos.id"
        );

        res.send({
        consultasPorEspecialidade: consultasPorEspecialidade[0],
        pacientesPorMedico: pacientesPorMedico[0],
    listaGeral: listaGeral[0]
        });

    } catch (erro) {
        res.status(500).send({ message: "Erro ao gerar relatório" });
    }
};


module.exports = {
    Login, //ok
    CadastrarUsuario, //ok
    CadastrarPaciente, //ok
    CadastrarConsulta, //ok
    ExcluirUsuarios, //ok
    ExcluirPacientes, //ok
    ExcluirConsultas, //ok
    AtualizarConsultas, //ok
    ListarUsuarios, //ok
    ListarPacientes, //ok
    ListarConsultas, //ok
    Relatorios //ok
};