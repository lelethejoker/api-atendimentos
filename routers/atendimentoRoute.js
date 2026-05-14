const {Router} = require('express');
const router = Router();
const atendimentoController = require('../controllers/atendimentoController');

router.get('/atendimentos', (req, res) => {
    const listaAtendimentos = atendimentoController.buscar();
    listaAtendimentos.then(atendimentos => res.status(200).json(atendimentos)).catch(error => res.status(400).json(error.message));
});

router.post('/atendimentos', (req, res) => {
    const novoAtendimento = req.query;
    const resposta = atendimentoController.criar(novoAtendimento);
    resposta.then(result => res.status(201).json(result)).catch(error => res.status(400).json(error.message));
});

router.put('/atendimentos/:id', (req, res) => {
    const atualizarAtendimento = req.query;
    const resposta = atendimentoController.atualizar(atualizarAtendimento);
    resposta.then(result => res.status(200).json(result)).catch(error => res.status(400).json(error.message));
});

router.patch('/atendimentos/:id', (req, res) => {
    const editarAtendimento = req.query;
    const resposta = atendimentoController.atualizarParcial(editarAtendimento);
    resposta.then(result => res.status(200).json(result)).catch(error => res.status(400).json(error.message));
});

router.delete('/atendimentos/:id', (req, res) => {
    const deletarAtendimento = req.params.id;
    const resposta = atendimentoController.deletar(deletarAtendimento);
    resposta.then(result => res.status(200).json(result)).catch(error => res.status(400).json(error.message));
});


module.exports = router;
