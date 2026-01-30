require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

const administradorRoutes = require('./src/routes/administradores');
// const atendenteRoutes = require('./src/routes/atendentes');
// const medicoRoutes = require('./src/routes/medicos');

app.use(express.json());

app.use(administradorRoutes);
// app.use(atendenteRoutes);
// app.use(medicoRoutes);

app.listen(port, () => {
    console.log('listening on ' + port);
})