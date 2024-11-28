const express = require("express");
const app = express();
const cors = require('cors');
const port = 8080;
const router = require("./routers/index");
const conexao = require("./infrasestrutura/conexao");
const tables = require("./infrasestrutura/tables")

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

router(app,express);
tables.init(conexao);

app.listen(port, (error) =>{
    if(error) {
        console.log("ERRO!");
        return;
    }
    console.log("INICIALIZADO!");
})