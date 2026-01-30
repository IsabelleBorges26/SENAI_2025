const db = require("../data/connection");

const ListarAgendamentos = async (req, res) => {
    const lista = await db.query("SELECT * FROM agendamentos");
    res.json(lista[0]).end();
}

    const CadastrarAgendamentos = async (req, res) => {
        const { cliente_id, tatuador_id, data_hora, valor, status, desenho } = req.body;
        try {
            const novoAgendamento = await db.query("INSERT INTO agendamentos VALUES (DEFAULT,?,?,?,?,?,?)", [cliente_id, tatuador_id, data_hora, valor, status, desenho]);

            const Agendamento = {
                id: novoAgendamento[0].insertId,
                cliente_id: cliente_id,
                tatuador_id: tatuador_id,
                data_hora: data_hora,
                valor: valor,
                status: status,
                desenho: desenho
            }
            res.json(Agendamento).status(202).end();
        } catch (error) {
            const info = { msg: "" };
            if (error.errno === 1452) {
                info.msg = "Agendamento não cadastrado";
            }

            res.status(500).json(info).end();
        }
    }

const ExcluirAgendamentos = async (req, res) => {
    const idAgendamento = req.params.id;

    try {
        const apagarAgendamento = await db.query("DELETE FROM agendamentos WHERE id = ?", [idAgendamento]);
        const info = { msg: "" };

        if (apagarAgendamento[0].affectedRows === 1) {
            info.msg = "Excluido com sucesso";
        }

        else if (apagarAgendamento[0].affectedRows === 0) {
            info.msg = "Agendamento não encontrado";
        }

        res.status(200).json(info).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Agendamento existente";
        }

        res.status(500).json(info).end();
    }
};

const AtualizarAgendamentos = async (req, res) => {
    const { id, cliente_id, tatuador_id, data_hora, valor, status, desenho } = req.body;

    try {
        const atuliza = await db.query("UPDATE agendamentos SET cliente_id = ?, tatuador_id = ?, data_hora = ?, valor = ?, status = ?, desenho = ? WHERE id = ?", [cliente_id, tatuador_id, data_hora, valor, status, desenho, id]);
        const info = { msg: "" };

        if (atuliza[0].affectedRows === 0) {
            info.msg = "Nenhum agendamento encontrado";
        }
        else if (atuliza[0].affectedRows === 1) {
            info.msg = "Agendamento atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};


const ListarClientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM clientes");
    res.json(lista[0]).end();
}

    const CadastrarClientes = async (req, res) => {
        const { nome, telefone, senha, email } = req.body;
        try {
            const novoCliente = await db.query("INSERT INTO clientes VALUES (DEFAULT,?,?,?,?)", [nome, telefone, senha, email]);

            const Cliente = {
                id: novoCliente[0].insertId,
                nome: nome,
                telefone: telefone,
                senha: senha,
                email: email
            }
            res.json(Cliente).status(202).end();
        } catch (error) {
            const info = { msg: "" };
            if (error.errno === 1452) {
                info.msg = "Cliente não cadastrado";
            }

            res.status(500).json(info).end();
        }
    }

const ExcluirClientes = async (req, res) => {
    const idCliente = req.params.id;

    try {
        const apagarCliente = await db.query("DELETE FROM clientes WHERE id = ?", [idCliente]);
        const info = { msg: "" };

        if (apagarCliente[0].affectedRows === 1) {
            info.msg = "Excluido com sucesso";
        }

        else if (apagarCliente[0].affectedRows === 0) {
            info.msg = "Cliente não encontrado";
        }

        res.status(200).json(info).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Cliente existente";
        }

        res.status(500).json(info).end();
    }
};

const AtualizarClientes = async (req, res) => {
    const { id, nome, telefone, senha } = req.body;

    try {
        const atuliza = await db.query("UPDATE clientes SET nome = ?, telefone = ?, senha = ? WHERE id = ?", [nome, telefone, senha, id]);
        const info = { msg: "" };

        if (atuliza[0].affectedRows === 0) {
            info.msg = "Nenhum cliente encontrado";
        }
        else if (atuliza[0].affectedRows === 1) {
            info.msg = "Cliente atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};


const ListarTatuadores = async (req, res) => {
    const lista = await db.query("SELECT * FROM tatuadores");
    res.json(lista[0]).end();
}

 const CadastrarTatuadores = async (req, res) => {
    const { nome, telefone, senha, email } = req.body;
    try {
        const novoAgendamento = await db.query("INSERT INTO tatuadores VALUES (DEFAULT,?,?,?, ?)", [nome, telefone, senha, email]);

        const Tatuador = {
            id: novoAgendamento[0].insertId, // corrigido
            nome: nome,
            telefone: telefone,
            senha: senha,
            email: email
        }
        res.status(202).json(Tatuador).end(); // colocar status antes do json
    } catch (error) {
        const info = { msg: "" };
        if (error.errno === 1452) {
            info.msg = "Tatuador não cadastrado";
        }

        res.status(500).json(info).end();
    }
}


const ExcluirTatuadores = async (req, res) => {
    const idTatuador = req.params.id;

    try {
        const apagarTatuadores = await db.query("DELETE FROM tatuadores WHERE id = ?", [idTatuador]);
        const info = { msg: "" };

        if (apagarTatuadores[0].affectedRows === 1) {
            info.msg = "Excluido com sucesso";
        }

        else if (apagarTatuadores[0].affectedRows === 0) {
            info.msg = "Tatuador não encontrado";
        }

        res.status(200).json(info).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Tatuador existente";
        }

        res.status(500).json(info).end();
    }
};

const AtualizarTatuadores = async (req, res) => {
    const { id, nome, telefone, senha } = req.body;

    try {
        const atuliza = await db.query("UPDATE tatuadores SET nome = ?, telefone = ?, senha = ? WHERE id = ?", [nome, telefone, senha, id]);
        const info = { msg: "" };

        if (atuliza[0].affectedRows === 0) {
            info.msg = "Nenhum tatuador encontrado";
        }
        else if (atuliza[0].affectedRows === 1) {
            info.msg = "Tatuador atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

const AgendamentosTatuador = async (req, res) => {
    const { tatuador_id, inicio, fim } = req.body;

    try {
        const lista = await db.query(
            "SELECT * FROM agendamentos WHERE tatuador_id = ? AND data_hora BETWEEN ? AND ?",
            [tatuador_id, inicio, fim]
        );

        res.status(200).json(lista[0]);
    } catch {
        res.status(500).json({ msg: "Erro ao buscar agendamentos" });
    }
};

const AgendamentosCliente = async (req, res) => {
    const { cliente_id, inicio, fim } = req.body;

    try {
        const lista = await db.query(
            "SELECT * FROM agendamentos WHERE cliente_id = ? AND data_hora BETWEEN ? AND ?",
            [cliente_id, inicio, fim]
        );

        res.status(200).json(lista[0]);
    } catch {
        res.status(500).json({ msg: "Erro ao buscar agendamentos do cliente" });
    }
};

const FaturamentoTatuador = async (req, res) => {
    const { mes, ano } = req.body;

    try {
        const lista = await db.query(
            "SELECT tatuador_id, SUM(valor) AS total_faturado FROM agendamentos WHERE status='concluída' AND MONTH(data_hora)=? AND YEAR(data_hora)=? GROUP BY tatuador_id",
            [mes, ano]
        );

        res.status(200).json(lista[0]);
    } catch {
        res.status(500).json({ msg: "Erro ao calcular faturamento" });
    }
};

const ProximosAgendamentos = async (req, res) => {
    try {
        const lista = await db.query(
            "SELECT * FROM agendamentos WHERE status='confirmada' AND data_hora > NOW() ORDER BY data_hora"
        );

        res.status(200).json(lista[0]);
    } catch {
        res.status(500).json({ msg: "Erro ao buscar próximos agendamentos" });
    }
};



module.exports = {
    ListarAgendamentos, 
    CadastrarAgendamentos,
    ExcluirAgendamentos,
    AtualizarAgendamentos,
    ListarClientes, //ok
    CadastrarClientes, //ok
    ExcluirClientes, //ok
    AtualizarClientes, //ok
    ListarTatuadores,//ok
    CadastrarTatuadores, //ok
    ExcluirTatuadores, //ok
    AtualizarTatuadores, //ok
    AgendamentosTatuador, 
    AgendamentosCliente, 
    FaturamentoTatuador, 
    ProximosAgendamentos
}
