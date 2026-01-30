const express = require ('express');
const router = express.Router();

const ClientesController = require("../controllers/clientes.controller");

router.get("/clientes", ClientesController.ListarClientes);
router.get("/cliente/:id", ClientesController.BuscarClientes);
router.post("/cliente", ClientesController.CadastrarCliente);
router.delete("/cliente/:id", ClientesController.ExcluirCliente);
router.put("/cliente", ClientesController.AtualizarCliente);
router.get("/clientependente", ClientesController.locacoes_Pendentes);
router.get("/valorgasto", ClientesController.Valor_Gasto);
router.get("/qntlocacoes", ClientesController.Qnt_Locacoes);

module.exports = router;