const express = require ('express');
const router = express.Router();

const IngressosController = require("../controllers/ingressos.controller");

router.post("/ingresso", IngressosController.CadastrarIngresso);
router.get("/ingresso/:id", IngressosController.BuscarIngresso);
router.get("/ingressos", IngressosController.ListarIngresso);
router.put("/ingresso", IngressosController.AtualizarIngresso);
router.delete("/ingresso/:id", IngressosController.ExcluirIngresso);
router.get("/ingressos/:id", IngressosController.Listar_ingresso_id);
router.get("/vendidos/nome/:nome", IngressosController.IngressosVendidos);
router.get("/UltimaVenda", IngressosController.UltimaVenda);
router.get("/pedidos/:id", IngressosController.Pedidos_Por_Ingresso);

module.exports = router;