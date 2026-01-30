const ValidaAdm = (req, res, next) => {
    const cargo = req.headers['user'].cargo;
    
    if(cargo === "Administrador") {
        next();
    } else {
        res.status(401).send("Sem nível de acesso").end();
    }
};

const ValidaAdmOuAtendente = (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if (cargo === "Administrador" || cargo === "Atendente") {
        next();
    } else {
        res.status(401).send("Sem nível de acesso").end();
    }
};

const ValidaTudo= (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if (cargo === "Administrador" || cargo === "Nutricionista" || cargo === "Atendente" ) {
        next();
    } else {
        res.status(401).send("Sem nível de acesso").end();
    }
};


module.exports = {
    ValidaAdm,  
    ValidaAdmOuAtendente,
    ValidaTudo
}
