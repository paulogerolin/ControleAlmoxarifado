const Lancamento = require('../models/lancamentosModel');
const RequisicaoAtd = require('../models/requisicaoAtdModel')
const Item = require('../models/itensModel');
const Estoque = require('../models/estoqueModel');

exports.render = (req, res) => {
    if (req.userIsAlmox === true || req.userIsAdmAlmox === true || req.userSuperPowers === true) {
        res.render('estoque', {
            name: req.userName,
            id: req.userId,
            email: req.userEmail,
            isRequisitante: req.userIsRequisitante,
            isAlmox: req.userIsAlmox,
            isPat: req.userIsPat,
            isAdmAlmox: req.userIsAdmAlmox,
            isAdmPat: req.userIsAdmPat,
            superPowers: req.userSuperPowers,
            matricula: req.userMatricula
        });
    } else {
        return res.status(401).render('unauthorized', {
            name: req.userName,
            id: req.userId,
            email: req.userEmail,
            isRequisitante: req.userIsRequisitante,
            isAlmox: req.userIsAlmox,
            isPat: req.userIsPat,
            isAdmAlmox: req.userIsAdmAlmox,
            isAdmPat: req.userIsAdmPat,
            superPowers: req.userSuperPowers,
            matricula: req.userMatricula,
            erros: '',
            sucess: ''
        });
    }
}

exports.lista = async (req, res) => {
    if (req.userIsAlmox === true || req.userIsAdmAlmox === true || req.userSuperPowers === true) {
        try {
            const itens = new Item();
            await itens.search();
            const lancamento = new Lancamento();
            await lancamento.search();
            const requisicaoAtd = new RequisicaoAtd();
            await requisicaoAtd.search();
            const estoque = new Estoque(itens.lista, lancamento.lista, requisicaoAtd.lista);
            await estoque.register();
            await estoque.data();
            res.status(200).json(estoque.info);
        } catch (err) {
            console.log(err);
        }
    } else {
        return res.status(401).render('unauthorized', {
            name: req.userName,
            id: req.userId,
            email: req.userEmail,
            isRequisitante: req.userIsRequisitante,
            isAlmox: req.userIsAlmox,
            isPat: req.userIsPat,
            isAdmAlmox: req.userIsAdmAlmox,
            isAdmPat: req.userIsAdmPat,
            superPowers: req.userSuperPowers,
            matricula: req.userMatricula,
            erros: '',
            sucess: ''
        });
    }
}

