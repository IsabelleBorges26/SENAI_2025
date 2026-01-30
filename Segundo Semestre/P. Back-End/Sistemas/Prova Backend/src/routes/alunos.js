const Controller = require("../controllers/alunos");

const express = require('express');

const alunoRoutes = express.Router();

alunoRoutes.get('/alunos', Controller.listarAlunos);
alunoRoutes.post("/cadastrarAluno",  Controller.cadastrarAluno);
alunoRoutes.delete("/deletar/:id", Controller.excluirAluno);
alunoRoutes.put("/aluno", Controller.atualizarAluno);

module.exports = alunoRoutes;