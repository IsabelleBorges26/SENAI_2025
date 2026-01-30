const express = require('express');
const cors = require('cors');

const ClientesRoutes = require ("./src/routes/clientes.routes");
const FilmesRoutes = require ("./src/routes/filmes.routes");
const LocacoesRoutes = require ("./src/routes/locacoes.routes");


const app = express();

app.use(express.json());
app.use(cors());

app.use(ClientesRoutes);
app.use(FilmesRoutes);
app.use(LocacoesRoutes);


app.listen(3000, () => {
    console.log ("Servidor Online na portal 3000!");
});

