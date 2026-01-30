const express = require('express');
const cors = require('cors');

const IngressosRoutes = require ("./src/routes/ingressos.route");
const ComidasRoutes = require ("./src/routes/comidas.route");


const app = express();

app.use(express.json());
app.use(cors());

app.use(IngressosRoutes);
app.use(ComidasRoutes);

app.listen(3000, () => {
    console.log ("Servidor Online na portal 3000!");
});

