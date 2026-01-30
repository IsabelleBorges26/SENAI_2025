const express = require("express"); 
const cors = require ("cors"); 

const clienteslientesRoutes = require ("./src/routes/clientes.routes");       
const quartosRoutes = require ("./src/routes/quartos.routes");          
const reservasRoutes = require ("./src/routes/reservas.routes");   

const app = express();

app.use(express.json()); 
app.use(cors()); 


app.use(clienteslientesRoutes);
app.use(quartosRoutes);
app.use(reservasRoutes);

app.listen(3000, () => {
    console.log ("Servidor online na porta 3000");
});
