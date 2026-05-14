const {Router} = require('express');
const router = Router();
const atendimentoController = require('../controllers/atendimentoController');

router.get('/atendimentos',  async (req, res, next) => {
    
    try {
        const listaAtendimentos = await atendimentoController.buscar();
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
    const dadosAtendimento = req.body;
    try {
        const dadosAtendimento = {
            id: req.params.id,
            ...dadosAtendimento
        }
        const resposta = await atendimentoController.atualizar(dadosAtendimento);
        res.status(200).json(resposta);
        }
         catch (error) {
        next(error);
    }
};
router.put('/atendimentos/:id', 
            atualizarAtendimento);

router.patch('/atendimentos/:id', 
            atualizarAtendimento);

router.delete('/atendimentos/:id', async (req, res, next) => {
    try {
        await atendimentoController.deletar({id: req.params.id});
        res.status(204).json({ message: 'Atendimento deletado com sucesso' });
    } catch (error) {
        next(error);
    }
});


module.exports = router;
