const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/clientes.controller.js");

router.get("/clientes", clientesController.listar); 
router.post("/cliente", clientesController.cadastrar);
router.patch("/cliente/:id", clientesController.atualizar);

module.exports = router;