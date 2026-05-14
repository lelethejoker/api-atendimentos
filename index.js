const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers/router-index');
const conexao = require('./infraestrutura/conexao');
const tabelas = require('./infraestrutura/tabelas');

tabelas.init(conexao);
router(app);

app.listen(port, (err) => {
    if (err) {
       console.error('Erro ao iniciar o servidor:', err);
    } else {
        console.log(`Servidor esta rodando na porta ${port}`);
    }
});