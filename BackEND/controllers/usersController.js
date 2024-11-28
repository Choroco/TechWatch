const usersModel = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class usersController {
    // Método para registrar um novo usuário
    async registrar(req, res) {
        const { login, password, role = 'USER' } = req.body;

        try {
            // Verifica se o login e a password foram informados
            if (!login || !password) {
                return res.status(400).send({ message: "login e password são obrigatórios." });
            }

            // Criptografa a password
            const passwordHash = bcrypt.hashSync(password, 10);

            // Cria o novo usuário no banco
            const resposta = await usersModel.criar(login, passwordHash, role);

            // Responde com sucesso
            res.status(201).send({ message: "Usuário registrado com sucesso", id: resposta.insertId });
        } catch (error) {
            console.error("Erro ao registrar usuário:", error);
            res.status(500).send({ message: "Erro ao registrar usuário no servidor." });
        }
    }

    // Função de login
    async login(req, res) {
        const { login, password } = req.body;

        try {
            const usuario = await usersModel.buscarLogin(login);
            
            if (!usuario) {
                return res.status(404).send({ message: "Usuário não encontrado" });
            }

            // Verifica se a password está correta
            const passwordValida = bcrypt.compareSync(password, usuario.password);
            
            if (!passwordValida) {
                return res.status(401).send({ message: "password incorreta" });
            }

            // Gera o token JWT
            const token = jwt.sign(
                { id: usuario.id, login: usuario.login, role: usuario.role },
                "secretkey", // chave secreta do JWT
                { expiresIn: "1h" } // expira em 1 hora
            );

            // Retorna o token para o cliente
            res.status(200).send({ token });
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            res.status(500).send({ message: "Erro no servidor" });
        }
    }
}
    


module.exports = new usersController();