const express = require("express"); 
const cors = require ("cors"); 

const ClientesRoutes = require ("./src/routes/clientes.routes");       
const ProdutosRoutes = require ("./src/routes/produtos.routes");    
const PedidosRoutes = require ("./src/routes/pedidos.routes");        

const app = express();

app.use(express.json()); 
app.use(cors()); 

app.use(ClientesRoutes);
app.use(ProdutosRoutes);
app.use(PedidosRoutes);

app.listen(3000, () => {
    console.log ("Servidor online na porta 3000");
});


