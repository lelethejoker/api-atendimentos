const atendimentoModel = require("../models/atendimentoModel");
const validarAtendimento = require("./validacao-atendimento");
class AtendimentoController {
    
    async listar() {
        return atendimentoModel.listar();
    }
    async buscarPorId(id) {
        return atendimentoModel.buscarPorId(id);
    }
    async criar(novoAtendimento) {
        validarAtendimento.validarAtendimento(novoAtendimento);
        
        return atendimentoModel.criar(novoAtendimento);
    }
    async atualizar(dadosAtendimento) {
        validarAtendimento.validarAtendimento(dadosAtendimento);
        return atendimentoModel.atualizar(dadosAtendimento);
    }
    async atualizarParcial(dadosAtendimento) {
        validarAtendimento.validarAtendimento(dadosAtendimento, true);
        return atendimentoModel.atualizarParcial(dadosAtendimento);
    }
    async deletar(id) {
        return atendimentoModel.deletar(id);
    }
}

module.exports = new AtendimentoController();