const {Router} = require('express');
const router = Router();
const atendimentoController = require('../controllers/atendimentoController');

router.get('/atendimentos', async (req, res, next) => {
    try {
        const listaAtendimentos = await atendimentoController.listar();
        res.status(200).json(listaAtendimentos);
    } catch (error) {
        next(error);
    }
});

router.get('/atendimentos/:id',  async (req, res, next) => {
    
    try {
        const listaAtendimentos = await atendimentoController.buscarPorId(req.params.id);
        res.status(200).json(listaAtendimentos);
    } catch (error) {
        next(error);
    }
});

router.post('/atendimentos', async (req, res, next) => {
    try {
        const resposta = await atendimentoController.criar(req.body);
        res.status(201).json(resposta);
    } catch (error) {
        next(error);
    }
});

const atualizarAtendimento = async (req, res, next) => {
    try {
        const dadosAtendimento = {
            id: req.params.id,
            ...req.body
        }
        const resposta = await atendimentoController.atualizar(dadosAtendimento);
        res.status(200).json(resposta);
        }
         catch (error) {
        next(error);
    }
};

const atualizarParcialAtendimento = async (req, res, next) => {
    try {
        const dadosAtendimento = {
            id: req.params.id,
            ...req.body
        }
        const resposta = await atendimentoController.atualizarParcial(dadosAtendimento);
        res.status(200).json(resposta);
    } catch (error) {
        next(error);
    }
};

router.put('/atendimentos/:id', 
            atualizarAtendimento);

router.patch('/atendimentos/:id', 
            atualizarParcialAtendimento);

router.delete('/atendimentos/:id', async (req, res, next) => {
    try {
        await atendimentoController.deletar(req.params.id);
        res.status(200).json({ message: 'Atendimento deletado com sucesso' });
    } catch (error) {
        next(error);
    }
});


module.exports = router;
