const express = require("express");
const router = express.Router();

const playlistsController = require("../controllers/playlists.controller.js");

router.get("/playlists", playlistsController.listar); 
router.get("/playlists/:id", playlistsController.buscar);
router.post("/playlist", playlistsController.cadastrar);
router.delete("/playlist/:id", playlistsController.apagar);
router.put("/playlist", playlistsController.alterar);
router.patch("/playlist/:id", playlistsController.atualizar);

module.exports = router;