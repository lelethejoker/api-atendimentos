class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos() {
        const sql = 
    `CREATE TABLE IF NOT EXISTS atendimento (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	DATA DATE,
	servico VARCHAR(100),
	cliente VARCHAR(100),
	STATUS ENUM("Pendente", "Realizado com sucesso", "Cancelado") DEFAULT "Pendente");`

    this.conexao.query(sql, (error) => {
        if (error) {
            console.log('Erro ao criar tabela de atendimentos: ' + error);
            return;
        }
        console.log('Tabela de atendimentos criada com sucesso!');
});
}
}

module.exports = new Tabelas();