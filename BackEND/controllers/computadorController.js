const computadorModel = require("../models/computadorModel");
class computadorController{
    buscar() {
        return computadorModel.listar();
    }

    async buscarId(id) {
        try {
            const computador = await computadorModel.listarId(id);
            if (computador) {
                return computador; 
            } else {
                return { message: "Computador não encontrado" }; 
            }
        } catch (error) {
            console.error("Erro ao buscar computador:", error);
            throw error; 
        }
    }
    
    criar(novoComputador) {
        return computadorModel.criar(novoComputador);
    }
    altualizar(computadorAtualizado, id) {
        return computadorModel.atualizar(computadorAtualizado, id);
    }
    deletar(id) {
        return computadorModel.deletar(id);
    }
}

module.exports = new computadorController();