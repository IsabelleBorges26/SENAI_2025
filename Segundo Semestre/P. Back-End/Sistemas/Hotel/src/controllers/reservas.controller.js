const reservas = require("../data/reservas");

const listar = (req, res) => {
    res.status(200).send(reservas).end();
};

const cadastrar = (req, res) => {
    const novareserva = req.body;
    var clienteexiste = false;
    var reservaexiste = false;

    clientes.forEach((cliente, index) => {
        if (cliente.id === novareserva.cliente_id) clienteexiste = true;
    });


    quartos.forEach((quarto, index) => {
        if (quarto.id === novareserva.quarto_id && quarto.status === "vago") reservaexiste = true;
    });


    reservas.forEach((reserva, index) => {
        if (reserva.cliente_id == novareserva.cliente_id && reserva.checkOut == "") reservaexiste = false;
    });


    if (clienteexiste === true && reservaexiste === true) {
        reservas.push(novareserva);
         quartos.forEach((quarto, index) => {
        if (quarto.id === novareserva.quarto_id && quarto.status === "vago") reservaexiste = true;
    }); //muda para ocupado


        res.status(201).send("Reservado com sucesso 😊").end();
    } else {
        res.status(404).end();
    }
};



const atualizar = (req, res) => {
    const idReserva = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    reservas.forEach((reserva, index) => {
        if (reserva.id === idReserva) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    }
    else {
        Object.keys(novosDados).forEach((key) => {
            reservas[indice][key] = novosDados[key];
        });

        res.status(204).end();
    }
};

module.exports = {
    listar, //
    cadastrar, //
    atualizar //
};