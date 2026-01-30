const express = require("express");
const router = express.Router();

const PedidosController = require("../controllers/pedidos.controller.js");
 
router.get("/pedidos/:id", PedidosController.buscar); 
router.post("/pedido", PedidosController.cadastrar); 
router.patch("/pedido/:id", PedidosController.atualizar); 
router.get("/pedidos", PedidosController.listar); 

module.exports = router;