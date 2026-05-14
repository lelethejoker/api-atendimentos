class Tabelas {
    async init(conexao) {
        this.conexao = conexao;
        await this.criarTabelaAtendimentos();
    }

    async criarTabelaAtendimentos() {
        const sql = 
    `CREATE TABLE IF NOT EXISTS atendimento (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	DATA DATE,
	servico VARCHAR(100),
	cliente VARCHAR(100),
	STATUS ENUM("Pendente", "Realizado com sucesso", "Cancelado") DEFAULT "Pendente");`

    try {
        await this.conexao.query(sql);
        console.log('Tabela de atendimentos criada com sucesso!');
    } catch (error) {
        console.log('Erro ao criar tabela de atendimentos: ' + error);
    }
}
}

module.exports = new Tabelas();