const conexao = require("../infrasestrutura/conexao");

class computadorModel {
    listar() {
        const sql = "SELECT * FROM computador"
        return new Promise((resolve, reject) =>{
            conexao.query(sql, {}, (error, resposta) => {
                if(error) {
                    console.log("Erro: SELECT * FROM computador");
                    reject(error);
                }
                console.log("Lista encontrada");
                resolve(resposta);
            });
        });
    }

    listarId(id) {
        const sql = "SELECT * FROM computador WHERE id = ?";
        
        return new Promise((resolve, reject) => {
            conexao.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log("Erro ao buscar computador por ID");
                    console.error(error);
                    reject(error);
                } else {
                    if (resposta.length > 0) {
                        console.log(`Computador com ID ${id} encontrado`);
                        resolve(resposta[0]);
                    } else {
                        console.log(`Nenhum computador encontrado com o ID ${id}`);
                        resolve(null);
                    }
                }
            });
        });
    }

    criar(novoComputador){
        const sql = "INSERT INTO computador SET ?";
        return new Promise((resolve, reject)=>{
            conexao.query(sql, novoComputador, (error, resposta) =>{
                if(error) {
                    console.log("Erro: Nao foi possivel criar este computador");
                    reject(error);
                }
                console.log("Computador criado!")
                resolve(resposta);
            });
        });
    }

    atualizar(computadorAtualizado, id){
        const sql = "UPDATE computador SET ? WHERE id = ?";
        return new Promise((resolve, reject)=>{
            conexao.query(sql, [computadorAtualizado, id], (error, resposta) =>{
                if(error) {
                    console.log("Erro: Nao foi possivel atualizar este computador");
                    reject(error);
                }
                console.log("Computador atualizado!")
                resolve(resposta);
            });
        });
    }
    deletar(id){
        const sql = "DELETE FROM computador WHERE id = ?";
        return new Promise((resolve, reject)=>{
            conexao.query(sql, id, (error, resposta) =>{
                if(error) {
                    console.log("Erro: Nao foi possivel deletar este computador");
                    reject(error);
                }
                console.log("Computador deletado!");
                resolve(resposta);
            });
        });
    }
    
}
module.exports = new computadorModel();