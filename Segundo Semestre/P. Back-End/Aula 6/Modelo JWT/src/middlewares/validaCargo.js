const validaGerente = (req, res, next) => {
    const cargo = req.headers['user'].cargo;
    
    if(cargo === "GERENTE") {
        next();
    } else {
        res.status(401).send("Sem nível de acesso").end();
    }
};

const validaSupervisor = (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if(cargo === "Supervisor") {
        next();
    } else {
        res.status(401).send("Sem nível de acesso").end();
    }
};

const validaAmbos = (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if(cargo === "Supervisor" || cargo === "GERENTE") {
        next();
    } else {
        res.status(401).send("Sem nível de acesso").end();
    }
};

module.exports = {
    validaGerente,  
    validaSupervisor, 
    validaAmbos
}
