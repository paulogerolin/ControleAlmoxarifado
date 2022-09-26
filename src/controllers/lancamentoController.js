const Lancamento = require('../models/lancamentosModel');
const RequisicaoAtd = require('../models/requisicaoAtdModel');
const Item = require('../models/itensModel');
const Estoque = require('../models/estoqueModel');




exports.render = (req, res) => {
    if (req.userIsAlmox === true || req.userIsAdmAlmox === true || req.userSuperPowers === true) {
        res.render('lancamento', {
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

exports.cadastra = async (req, res) => {
    if (req.userIsAlmox === true || req.userIsAdmAlmox === true || req.userSuperPowers === true) {
        try {
            const lancamento = new Lancamento(req.body);
            await lancamento.register();
            if (lancamento.lanErrors.length > 0) {
                const msg = [...lancamento.lanErrors];

                return res.render('lancamento', {
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
            await lancamento.search();
            const requisicaoAtd = new RequisicaoAtd();
            await requisicaoAtd.search();
            const estoque = new Estoque(itens.lista, lancamento.lista, requisicaoAtd.lista);
            await estoque.register();
            return res.render('lancamento', {
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
                sucess: ['NF Lançada com sucesso!']
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

