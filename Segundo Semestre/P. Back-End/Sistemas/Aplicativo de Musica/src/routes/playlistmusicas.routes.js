const express = require("express");
const router = express.Router();

const playlistmusicasController = require("../controllers/playlistmusicas.controller.js");

router.get("/playlistmusicas", playlistmusicasController.listar); 
router.get("/playlistmusicas/:id", playlistmusicasController.buscar);
router.post("/playlistmusica", playlistmusicasController.cadastrar);
router.delete("/playlistmusica/:id", playlistmusicasController.apagar);
router.put("/playlistmusica", playlistmusicasController.alterar);
router.patch("/playlistmusica/:id", playlistmusicasController.atualizar);

module.exports = router;