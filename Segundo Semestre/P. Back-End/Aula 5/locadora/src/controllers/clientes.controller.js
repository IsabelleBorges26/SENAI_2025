const db = require("../datas/connection");

const ListarClientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM clientes");
    res.json(lista[0]).end();
}

const BuscarClientes = async (req, res) => {
    const idCliente = req.params.id;
    const cliente = await db.query("SELECT * FROM clientes WHERE id = " + idCliente);
    res.json(cliente[0][0]).end;
}

const CadastrarCliente = async (req, res) => {
    const {nome, email} = req.body;
    const novoCliente = await db.query("INSERT INTO clientes VALUES (DEFAULT,?,?)", [nome, email]);
   
    const cliente = {
        id: novoCliente[0].insertId,
        nome: nome
    }
    res.json(cliente).status(202).end();
}

const ExcluirCliente = async (req, res) => {
    const idCliente = req.params.id;

    try {
        const apagarCliente = await db.query ("DELETE FROM clientes WHERE id = ?", [idCliente]);
        const info = {msg:""};

        if (apagarCliente[0].affectedRows === 1) {
            info.msg = "Excluido com sucesso";
        }
        
        else if (apagarCliente[0].affectedRows === 0) {
            info.msg = "Cliente não encontrado";
        }

        res.status(200).json(info).end();

    } catch(error) {
        const info = {msg: ""};
        
        if (error.errno === 1451) {
            info.msg = "Cliente com locaçãõ";
        }

        res.status(500).json(info).end();
    }
};

const AtualizarCliente = async (req,res) => {
    const {id, nome, email} = req.body;

    try {
        const atuliza = await db.query("UPDATE clientes SET nome = ?, email = ? WHERE id = ?", [nome, email, id]);
        const info = {msg: ""};

        if(atuliza[0].affectedRows === 0) {
            info.msg = "Nenhum cliente encontrado";
        }
        else if(atuliza[0].affectedRows === 1) {
            info.msg = "Cliente atualizado com sucesso";
        } 

        res.status(200).json(info).end();

    } catch(error) {
        console.log(error);
        res.status(500).end();
    }
};

const locacoes_Pendentes = async (req, res) => {
    const status = req.params.cliente;

    try {
        const BuscarLocacoes = await db.query("SELECT clientes.nome, COUNT(locacoes.status) AS 'N. Locações Pendentes' FROM clientes INNER JOIN locacoes ON locacoes.cliente_id = clientes.id WHERE locacoes.status = 'Pendente'GROUP BY clientes.id");

        res.status(200).json(BuscarLocacoes[0]).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Locações existentes";
        }
        res.status(500).json(info).end();
    }
};

const Valor_Gasto = async (req, res) => {
    const preco = req.params.preco;

    try {
        const BuscarLocacoes = await db.query("SELECT clientes.nome, SUM(filmes.preco) AS Valor_Gasto FROM clientes INNER JOIN locacoes ON locacoes.cliente_id = clientes.id INNER JOIN filmes ON filmes.id = locacoes.filme_id GROUP BY clientes.id, clientes.nome");

        res.status(200).json(BuscarLocacoes[0]).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Locações existentes";
        }
        res.status(500).json(info).end();
    }
};

const Qnt_Locacoes = async (req, res) => {
    const preco = req.params.preco;

    try {
        const BuscarLocacoes = await db.query("SELECT clientes.id AS cliente_id, clientes.nome, locacoes.status, COUNT(*) AS Quantidade_de_Locações FROM clientes INNER JOIN locacoes ON locacoes.cliente_id = clientes.id GROUP BY clientes.id, clientes.nome, locacoes.status ORDER BY clientes.id, locacoes.status");

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
    ListarClientes,
    BuscarClientes, 
    CadastrarCliente,
    ExcluirCliente, 
    AtualizarCliente,
    locacoes_Pendentes,
    Valor_Gasto,
    Qnt_Locacoes

}

