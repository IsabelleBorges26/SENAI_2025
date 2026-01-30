const express = require("express");
const router = express.Router();

const quartosController = require("../controllers/quartos.controller.js");
 
router.get("/quartos/:id", quartosController.buscar);

module.exports = router;