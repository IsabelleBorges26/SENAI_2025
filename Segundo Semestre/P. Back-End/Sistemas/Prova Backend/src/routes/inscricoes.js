const Controller = require("../controllers/inscricoes");

const express = require('express');

const inscriRoutes = express.Router();

inscriRoutes.get('/inscricoes', Controller.listarInscricoes);
inscriRoutes.post("/cadastrarInscricoes",  Controller.cadastrarInscricao);
inscriRoutes.delete("/inscricao/:id", Controller.excluiInscricao);
inscriRoutes.put("/inscricao", Controller.atualizarInscricao);
inscriRoutes.get("/relatorios/oficinas", Controller.relatorioInsPorOfic);
inscriRoutes.get("/relatorios/categorias", Controller.relatorioInsPorCat);

module.exports = inscriRoutes;