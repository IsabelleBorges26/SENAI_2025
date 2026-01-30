const express = require ('express');
const router = express.Router();

const FilmesController = require("../controllers/filmes.controller");

router.get("/filmes", FilmesController.ListarFilmes);
router.get("/filme/:id", FilmesController.BuscarFilmes);
router.post("/filme", FilmesController.CadastrarFilme);
router.delete("/filme/:id", FilmesController.ExcluirFilme);
router.put("/filme", FilmesController.AtualizarFilme);
router.get("/faturamentocat", FilmesController.Faturamento_Categoria);


module.exports = router;