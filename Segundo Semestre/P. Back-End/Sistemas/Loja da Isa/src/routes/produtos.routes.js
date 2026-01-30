const express = require("express");
const router = express.Router();

const ProdutosController = require("../controllers/produtos.controller.js");
 
router.get("/produtos/:id", ProdutosController.buscar);
router.post("/produto", ProdutosController.cadastrar); 
router.delete("/produto/:id", ProdutosController.apagar);
router.patch("/produto/:id", ProdutosController.atualizar);

module.exports = router;