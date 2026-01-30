const quartos = require("../data/quartos");

const buscar = (req, res) => {
    const idQuarto = req.params.id;

    var user = "Não Encontrado 😢";

    quartos.forEach((quarto, index) => {
       if(quarto.id === idQuarto) {
            user = quarto;
       } 
    });

    res.send(user).end();
};

module.exports = {
    buscar,
};