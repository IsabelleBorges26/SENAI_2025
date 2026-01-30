const express = require ('express');
const router = express.Router();

const LocacoesController = require("../controllers/locacoes.controller");

router.get("/locacoes", LocacoesController.ListarLocacoes);
router.get("/locacao/:id", LocacoesController.BuscarLocacoes);
router.post("/locacao", LocacoesController.CadastrarLocacao);
router.delete("/locacao/:id", LocacoesController.ExcluirLocacao);
router.put("/locacao", LocacoesController.AtualizarLocacao);
router.get("/locacoes/:id", LocacoesController.Listar_locacoes_id);
router.get("/locacoes/status/:status", LocacoesController.Listar_locacoes_status);
router.get("/faturamento", LocacoesController.Faturamento);
router.get("/faturamentostatus", LocacoesController.Faturamento_status);
router.get("/faturamentomes", LocacoesController.Faturamento_mes);

module.exports = router;