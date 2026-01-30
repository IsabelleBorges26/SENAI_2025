const express = require("express");
const router = express.Router();

const adm= require("../controllers/administradores");
const validate = require("../middlewares/auth");
const { ValidaAdm, ValidaAdmOuAtendente, ValidaTudo } = require("../middlewares/validaCargo");

router.post("/login", adm.Login);
router.post("/cadastrar/usuario", validate, ValidaAdmOuAtendente, adm.CadastrarUsuario);
router.post("/cadastrar/paciente", validate, ValidaAdmOuAtendente, adm.CadastrarPaciente);
router.post("/cadastrar/consulta", validate, ValidaAdmOuAtendente, adm.CadastrarConsulta);
router.delete("/excluir/usuario/:id", validate, ValidaAdm, adm.ExcluirUsuarios);
router.delete("/excluir/paciente/:id", validate, ValidaAdm, adm.ExcluirPacientes);
router.delete("/excluir/consulta/:id", validate, ValidaAdm, adm.ExcluirConsultas);
router.get("/relatorios", validate, ValidaAdm, adm.Relatorios);
router.get("/listar/usuarios", validate, ValidaTudo, adm.ListarUsuarios);
router.get("/listar/pacientes", validate, ValidaTudo, adm.ListarPacientes);
router.get("/listar/consultas", validate, ValidaTudo, adm.ListarConsultas);
router.patch("/atualizar/consultas", validate, ValidaAdm, adm.AtualizarConsultas);

module.exports = router;
