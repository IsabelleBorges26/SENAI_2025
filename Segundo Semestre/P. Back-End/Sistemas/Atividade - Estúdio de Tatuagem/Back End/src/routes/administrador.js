const express = require ('express');
const router = express.Router();

const administradorController = require("../controllers/administrador");
const validate = require('../middlewares/auth');

router.get("/listar/agendamentos", validate, administradorController.ListarAgendamentos);
router.post("/cadastrar/agendamento", validate, administradorController.CadastrarAgendamentos);
router.delete("/excluir/agendamento/:id", validate, administradorController.ExcluirAgendamentos);
router.put("/atualizar/agendamento", validate, administradorController.AtualizarAgendamentos);
router.get("/listar/clientes", validate, administradorController.ListarClientes);
router.post("/cadastrar/clientes", validate, administradorController.CadastrarClientes);
router.delete("/excluir/clientes/:id", validate, administradorController.ExcluirClientes);
router.put("/atualizar/clientes", validate, administradorController.AtualizarClientes);
router.get("/listar/tatuadores",  validate,  administradorController.ListarTatuadores);
router.post("/cadastrar/tatuador",  validate,  administradorController.CadastrarTatuadores);
router.delete("/excluir/tatuador/:id",  validate,  administradorController.ExcluirTatuadores);
router.put("/atualizar/tatuador", validate,  administradorController.AtualizarTatuadores);

router.get("/agendamentosTatuador", validate, administradorController.AgendamentosTatuador);
router.get("/agendamentosCliente", validate, administradorController.AgendamentosCliente);
router.get("/faturamento", validate, administradorController.FaturamentoTatuador);
router.get("/proximosagendamentos", validate, administradorController.ProximosAgendamentos);

module.exports = router;