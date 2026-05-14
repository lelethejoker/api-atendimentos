const routerAtendimento = require('./atendimentoroute');    


module.exports = (app) => {
    app.use(routerAtendimento);
}