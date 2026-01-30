const express = require('express');

const postsController = require("../controllers/posts");
const validate = require("../middlewares/auth");
const { validaGerente, validaSupervisor, validaAmbos } = require("../middlewares/validaCargo");

const postsRoutes = express.Router();

postsRoutes.get('/posts', validate, validaGerente, postsController.ListarPosts);
postsRoutes.post('/cadastrar/post', validate, validaAmbos, postsController.CadastrarPost);
postsRoutes.delete('/excluir/post/:id', validate, validaSupervisor, postsController.ExcluirPost);
postsRoutes.put('/atualizar/post', validate, validaSupervisor, postsController.AtualizarPost);


module.exports = postsRoutes;

