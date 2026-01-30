const express = require("express");
const router = express.Router();

const reservasController = require("../controllers/reservas.controller.js");

router.get("/reservas", reservasController.listar); 
router.post("/reserva", reservasController.cadastrar);
router.patch("/reserva/:id", reservasController.atualizar);

module.exports = router;