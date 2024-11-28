const { Router } = require("express");
const router = Router();
const computadorController = require("../controllers/computadorController");
const autenticarToken = require("./autenticacao");

router.get("/computador/", autenticarToken, (req, res) =>{
    const listaComputador = computadorController.buscar();
    listaComputador
    .then(computadores => res.status(200).json(computadores))
    .catch(error => res.status(400).json(error.message));
});

router.get("/computador/:id", autenticarToken, async (req, res) => {
    const { id } = req.params;
    
    try {
        const resposta = await computadorController.buscarId(id);
        res.status(200).send(resposta); 
    } catch (error) {
        console.error("Erro na rota:", error);
        res.status(500).send({ message: "Erro ao buscar computador" });
    }
});

router.post("/computador/", autenticarToken, (req, res) =>{
    const novoComputador = req.body;
    const computador = computadorController.criar(novoComputador);
    computador
    .then((computadorCriado) => res.status(201).json(computadorCriado))
    .catch(error => res.status(400).json(error.message));
});

router.put("/computador/:id", autenticarToken, (req, res) =>{
    const { id } = req.params;
    const computadorAtualizado = req.body;
    const computador = computadorController.altualizar(computadorAtualizado, id);
    computador
    .then((resultComputadorAtualizado) => res.status(200).json(resultComputadorAtualizado))
    .catch(error => res.status(400).json(error.message));
});

router.delete("/computador/:id", autenticarToken,(req, res) =>{
    const { id } = req.params;
    const computador = computadorController.deletar(id);
    computador
    .then((computadorDeletado) => res.status(200).json(computadorDeletado))
    .catch(error => res.status(400).json(error.message));
});

module.exports = router;