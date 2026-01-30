const jsonwebtoken = require("jsonwebtoken");
const db = require ("../data/connection");
const crypto = require('node:crypto');
const { head } = require("../routes/login");
const { emit } = require("node:process");

const CadastrarUsuario = async (req, res) => {
    const { email, nome, senha } = req.body;

    //Cria um hach MD5 em hexadecimal
    const NovaSenha = crypto.createHash("md5").update(senha).digest("hex").toString();

    const NovoUsuario = await db.query("INSERT INTO usuario VALUES (DEFAULT, ?, ?, ?);", [nome, email, NovaSenha]);

    res.send({
        id: NovoUsuario[0].insertId,
        nome: nome,
        email: email
    }).end();
};

const Login = async (req, res) => {
    const { user, psw } = req.body;
    
    try {
        const SenhaHash = crypto.createHash("MD5").update(psw).digest("hex").toString();
        const Usuario = await db.query ("SELECT * FROM usuario WHERE email = ? AND senha = ?;", [user, SenhaHash]);

        if(Usuario[0].length == 0) res.status(401).send({message:'E-mail or Password incorrect !'});

        const token = jsonwebtoken.sign(
            {
                id: Usuario[0][0].id,
                name: Usuario[0][0].nome,
                email: Usuario[0][0].email
            },
            process.env.SECRET_JWT,
            { expiresIn: "2min" }
        );

        res.status(200).json({ token : token }).end();
    }catch(err) {
        res.status(500).send(err).end();
    }
    
    res.status(200).end();
};

module.exports = {
    Login,
    CadastrarUsuario
}