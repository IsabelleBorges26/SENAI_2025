const jsonwebtoken = require("jsonwebtoken");
const db = require ("../data/connection");
const crypto = require('node:crypto');

const Login = async (req, res) => {
    const { user, psw } = req.body;
    
    try {
        const SenhaHash = crypto.createHash("MD5").update(psw).digest("hex").toString();
        const Tatuadores = await db.query ("SELECT * FROM tatuadores WHERE email = ? AND senha = ?;", [user, SenhaHash]);

        if(Tatuadores[0].length == 0) res.status(401).send({message:'E-mail or Password incorrect !'});
        
        const token = jsonwebtoken.sign(
            {
                id: Tatuadores[0][0].id,
                name: Tatuadores[0][0].nome,
                email: Tatuadores[0][0].email,
            },
            process.env.SECRET_JWT,
            { expiresIn: "60min" }
        );

        res.status(200).json({ token : token }).end();
    }catch(err) {
        res.status(500).send(err).end();
    }
    
    res.status(200).end();
};

module.exports = {
    Login
}