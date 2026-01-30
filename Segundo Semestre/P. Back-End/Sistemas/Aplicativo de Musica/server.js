const express = require("express"); //Importa um modulo
const cors = require ("cors"); 

const UsuariosRoutes = require ("./src/routes/usuarios.routes");       
const playlistsRoutes = require ("./src/routes/playlists.routes");          
const playlistmusicasRoutes = require ("./src/routes/playlistmusicas.routes");  
const musicasRoutes = require ("./src/routes/musicas.routes");   

const app = express();

app.use(express.json()); //Habilita comunicação via JSON
app.use(cors()); //Habilita requisição local

//Importar as rotas configuradas 
app.use(UsuariosRoutes);
app.use(playlistsRoutes);
app.use(playlistmusicasRoutes);
app.use(musicasRoutes);

app.listen(3000, () => {
    console.log ("Servidor online na porta 3000");
});
