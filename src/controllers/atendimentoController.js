const Lancamento = require('../models/lancamentosModel');
const RequisicaoAtd = require('../models/requisicaoAtdModel');
const Item = require('../models/itensModel');
const Estoque = require('../models/estoqueModel');

exports.render = (req, res) => {
    if (req.userIsAlmox === true || req.userIsAdmAlmox === true || req.userSuperPowers === true) {
        return res.render('atendimento', {
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

exports.atender = async (req, res) => {
    if (req.userIsAlmox === true || req.userIsAdmAlmox === true || req.userSuperPowers === true) {
        try {
            const requisicaoAtd = new RequisicaoAtd(req.body);
            await requisicaoAtd.register();
            if (requisicaoAtd.reqAtdErrors.length > 0) {
                const msg = [...requisicaoAtd.reqAtdErrors]
                return res.render('atendimento', {
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
                    erros: msg,
                    sucess: ''
                });
            }
            const itens = new Item();
            await itens.search();
            const lancamento = new Lancamento();
            await lancamento.search();
            await requisicaoAtd.search();
            const estoque = new Estoque(itens.lista, lancamento.lista, requisicaoAtd.lista);
            await estoque.register();
            return res.render('atendimento', {
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
                sucess: [`Requisição Nº:${requisicaoAtd.item.numReq} atendida com sucesso!`]
            });
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