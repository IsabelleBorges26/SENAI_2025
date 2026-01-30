require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

const loginRoutes = require('./src/routes/login');
const administradorRoutes = require('./src/routes/administrador');

app.use(express.json());

app.use(loginRoutes);
app.use(administradorRoutes);

app.listen(port, () => {
    console.log('listening on ' + port);
})