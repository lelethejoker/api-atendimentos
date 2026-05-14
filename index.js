const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers/router-index');
const conexao = require('./infraestrutura/conexao');
const tabelas = require('./infraestrutura/tabelas');

app.use(express.json());
router(app);

async function iniciarServidor() {
    try {
        await conexao.query('SELECT 1');
        await tabelas.init(conexao);

        app.listen(port, () => {
            console.log(`Servidor esta rodando na porta ${port}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
}

iniciarServidor();

app.use((err, req, res, next) => {
    console.error('Erro:', err);
    res.status(err.statusCode || 500).json({
        error: err.message || 'Erro Interno do Servidor'
    });
});
