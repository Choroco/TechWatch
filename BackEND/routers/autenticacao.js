const jwt = require("jsonwebtoken");

function autenticarToken(req, res, next) {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    
    if (!token) {
        return res.status(403).send({ message: "Token não fornecido" });
    }

    jwt.verify(token, "secretkey", (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: "Token inválido" });
        }
        req.usuario = decoded;
        next();
    });
}

module.exports = autenticarToken;
