const routerComputador = require("./computadorRouter");
const routerUsers = require("./usersRouter");

module.exports = (app, express) =>{
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(routerComputador);
    app.use(routerUsers);
};