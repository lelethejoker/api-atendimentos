const conexao = require('../infraestrutura/conexao');
class AtendimentoModel {
    async listar() {
        const sql = 'SELECT * FROM atendimento';
        try {
            const [atendimentos] = await conexao.query(sql);
            return atendimentos;
        } catch (erro) {
            console.log('Erro ao listar atendimentos: ' + erro);
            throw erro;
        }
    }
    async criar(novoAtendimento) {
        const sql = 'INSERT INTO atendimento SET ?';
        try {
            const [res] = await conexao.query(sql, novoAtendimento);
            console.log('Atendimento criado com sucesso!');
            return{id: res.insertId, ...novoAtendimento};
        } catch (error) {
            console.error('Erro ao criar atendimento: ', error);
            throw erro;
        }
    }
    async atualizar(atualizarAtendimento) {
        return this._atualizarCampos(atualizarAtendimento);
    }
    async editarParcial(editarAtendimento) {
        return this._atualizarCampos(editarAtendimento);
    }

    async _atualizarCampos(dadosAtendimento){
        const {id, ...campos} = dadosAtendimento;
        
        const sql = 'UPDATE atendimento SET ? WHERE id=?';

        try {
            const [res] = await conexao.query(sql, [campos, id]);

            if(res.affectedRows === 0) {
                throw new Error("Atendimento não encontrado.");
            }
            
            console.log('Atendimento Atualizado com sucesso')
            
            return {
                id,
                ...campos
            }
        } catch (error) {
            console.error("Erro ao atualizar atendimento: ", error);
            throw error;
        }
    }
    async deletar(id) {
        const sql = 'DELETE FROM atendimento WHERE id=?';
        try {
            const [res] = await conexao.query(sql, [id]);
            if(res.affectedRows === 0){
                throw new Error ("Atendimento não encontrado");
            }
            console.log('Atendimento deletado com sucesso!');
            return {id: deletarAtendimento.id};
        } catch (error) {
            console.error('Erro ao deletar atendimento: ', error);
            throw error;
        }
}
}

module.exports = new AtendimentoModel();