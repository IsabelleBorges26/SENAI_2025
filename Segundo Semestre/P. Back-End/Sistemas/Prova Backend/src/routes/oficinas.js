const Controller = require("../controllers/oficinas");

const express = require('express');

const oficRoutes = express.Router();

oficRoutes.get('/oficinas', Controller.listarOficinas);
oficRoutes.post("/cadastrarOficinas",  Controller.cadastrarOficina);
oficRoutes.delete("/oficina/:id", Controller.excluirOfic);
oficRoutes.put("/oficina", Controller.atualizarOfic);

module.exports = oficRoutes;