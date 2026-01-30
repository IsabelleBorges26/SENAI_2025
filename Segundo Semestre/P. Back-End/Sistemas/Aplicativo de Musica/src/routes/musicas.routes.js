const express = require("express");
const router = express.Router();

const musicasController = require("../controllers/musicas.controller.js");

router.get("/musicas", musicasController.listar); 
router.get("/musicas/:id", musicasController.buscar);
router.post("/musica", musicasController.cadastrar);
router.delete("/musica/:id", musicasController.apagar);
router.put("/musica", musicasController.alterar);
router.patch("/musica/:id", musicasController.atualizar);

module.exports = router;