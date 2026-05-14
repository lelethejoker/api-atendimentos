const conexao = require('../infraestrutura/conexao');
const AppError = require('../utils/appError');

class AtendimentoModel {
    async listar() {
        const sql = 'SELECT id, DATA AS data, servico, cliente, STATUS AS status FROM atendimento';
        try {
            const [atendimentos] = await conexao.query(sql);
            if(atendimentos.length === 0) {
                throw new AppError("Nenhum atendimento encontrado", 404);
            }
            return atendimentos;
        } catch (erro) {
            console.error('[atendimentoModel].listar', erro);
            throw new AppError("Erro ao listar atendimentos", 500);
        }
    }
    async buscarPorId(id) {
        const sql = 'SELECT id, DATA AS data, servico, cliente, STATUS AS status FROM atendimento WHERE id = ?';
        try {
            const [atendimentos] = await conexao.query(sql, [id]);
            if(atendimentos.length === 0) {
                throw new AppError("Atendimento não encontrado", 404);
            }
            return atendimentos;
        } catch (erro) {
            console.error('[atendimentoModel].listar', erro);
            if(error instanceof AppError) {
                throw error;
            }
            throw new AppError("Erro ao buscar atendimento", 500);
        }
    }
    async criar(novoAtendimento) {
        const sql = 'INSERT INTO atendimento SET ?';
        try {
            const [res] = await conexao.query(sql, novoAtendimento);
            console.log('Atendimento criado com sucesso!');
            return{id: res.insertId, ...novoAtendimento};
        } catch (AppError) {
            console.error('[atendimentoModel].criar', AppError);
            throw AppError;
        }
    }
    async atualizar(atualizarAtendimento) {
        return this.atualizarCampos(atualizarAtendimento);
    }
    async atualizarParcial(atualizarAtendimento) {
        return this.atualizarCampos(atualizarAtendimento);
    }

    async atualizarCampos(dadosAtendimento){
        const {id, ...campos} = dadosAtendimento;
        
        const sql = 'UPDATE atendimento SET ? WHERE id=?';

        try {
            const [res] = await conexao.query(sql, [campos, id]);

            if(res.affectedRows === 0) {
                throw new AppError("Atendimento não encontrado", 404);
            }
            
            console.log('Atendimento Atualizado com sucesso')
            
            return {
                id,
                ...campos
            }
        } catch (AppError) {
            console.error('[atendimentoModel].atualizar', AppError);
            if(error instanceof AppError) {
                throw error;
            }
            throw AppError;
        }
    }
    async deletar(id) {
        const sql = 'DELETE FROM atendimento WHERE id=?';
        try {
            const [res] = await conexao.query(sql, [id]);
            if(res.affectedRows === 0){
                throw new AppError("Atendimento não encontrado", 404);
            }
            console.log('Atendimento deletado com sucesso!');
            return {id};
        } catch (AppError) {
            console.error('[atendimentoModel].deletar', AppError);
            if(error instanceof AppError) {
                throw error;
            }
            throw AppError;
        }
}
}

module.exports = new AtendimentoModel();
