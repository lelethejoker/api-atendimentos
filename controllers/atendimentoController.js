const atendimentoModel = require("../models/atendimentoModel");
class atendimentoController {
    buscar() {
        return atendimentoModel.listar();
    }
    criar(novoAtendimento) {
        return "Criando Atendimentos..";
    }
    atualizar(id) {
        return "Atualizando Atendimento" + id + "..";
    }
    atualizarParcial(id) {
        return "Atualizando parcialmente Atendimento" + id + "..";
    }
    deletar(id) {
        return "Deletando Atendimento" + id + "..";
    }
}

module.exports = new atendimentoController();