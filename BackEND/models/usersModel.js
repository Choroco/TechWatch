const conexao = require("../infrasestrutura/conexao");
const bcrypt = require("bcryptjs");

class usersModel {
    // Função para criar o usuário
    criar(nome, senha, role) {
        const sql = "INSERT INTO users (login, password, role) VALUES (?, ?, ?)";

        return new Promise((resolve, reject) => {
            conexao.query(sql, [nome, senha, role], (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar usuário");
                    reject(error);
                } else {
                    resolve(resposta);
                }
            });
        });
    }

    // Função para buscar usuário pelo e-mail
    buscarLogin(login) {
        const sql = "SELECT * FROM users WHERE login = ?";

        return new Promise((resolve, reject) => {
            conexao.query(sql, [login], (error, resposta) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(resposta[0]); // Retorna o primeiro usuário encontrado
                }
            });
        });
    }
}
module.exports = new usersModel();
/*
  listar() {
        const sql = "SELECT * FROM users"
        return new Promise((resolve, reject) =>{
            conexao.query(sql, {}, (error, resposta) => {
                if(error) {
                    console.log("Erro: SELECT * FROM users");
                    reject(error);
                }
                console.log("Lista encontrada");
                resolve(resposta);
            });
        });
    }

    listarId(id) {
        const sql = "SELECT * FROM users WHERE id = ?";
        
        return new Promise((resolve, reject) => {
            conexao.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log("Erro ao buscar usuario por ID");
                    console.error(error);
                    reject(error);
                } else {
                    if (resposta.length > 0) {
                        console.log(`Usuario com ID ${id} encontrado`);
                        resolve(resposta[0]);
                    } else {
                        console.log(`Nenhum usuario encontrado com o ID ${id}`);
                        resolve(null);
                    }
                }
            });
        });
    }
criar(novoUser){
    const sql = "INSERT INTO users SET ?";
    return new Promise((resolve, reject)=>{
        conexao.query(sql, novoUser, (error, resposta) =>{
            if(error) {
                console.log("Erro: Nao foi possivel criar este usuario");
                reject(error);
            }
            console.log("Usuario criado!")
            resolve(resposta);
        });
    });
}
*/