const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/usersController");


router.post("/auth/register", usersController.registrar);

router.post("/auth/login", usersController.login);

// Outras rotas protegidas podem ser adicionadas aqui


module.exports = router;