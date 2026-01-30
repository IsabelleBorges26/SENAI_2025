require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

const alunoRoutes = require('./src/routes/alunos');
const inscriRoutes = require('./src/routes/inscricoes');
const oficRoutes = require('./src/routes/oficinas');

app.use(express.json());

app.use(alunoRoutes);
app.use(inscriRoutes);
app.use(oficRoutes);

app.listen(port, () => {
    console.log('listening on ' + port);
})