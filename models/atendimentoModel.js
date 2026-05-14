const conexao = require('../infraestrutura/conexao');
class AtendimentoModel {
    async listar() {
        const sql = 'SELECT * FROM atendimento';
        try {
            const [atendimentos] = await conexao.query(sql);
            return atendimentos;
        } catch (erro) {
            console.error('[atendimentoModel].listar', erro);
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
            console.error('[atendimentoModel].criar', error);
            throw error;
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
            console.error('[atendimentoModel].atualizar', error);
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
            return {id};
        } catch (error) {
            console.error('[atendimentoModel].deletar', error);
            throw error;
        }
}
}

module.exports = new AtendimentoModel();