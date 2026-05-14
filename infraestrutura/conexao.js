const mysql = require('mysql2/promise');

const conexao = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'controle_atendimento'
});

module.exports = conexao;