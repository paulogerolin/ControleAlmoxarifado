const Requisicao = require('../models/requisicaoModel');

exports.render = (req, res) => {
    if (req.userIsAlmox === true || req.userIsAdmAlmox === true || req.userSuperPowers === true) {
        res.render('requisicao', {
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
};

exports.lista = async (req, res) => {
    if (req.userIsAlmox === true || req.userIsAdmAlmox === true || req.userSuperPowers === true) {
        try {
            const requisicao = new Requisicao();
            await requisicao.search();
            res.status(200).json(requisicao.lista);
        } catch (err) {
            console.log(err);
        }
    } else {
        res.status(401).json('Usuário não possui permissão.')
    }
}

exports.cadastra = async (req, res) => {
    if (req.userIsAlmox === true || req.userIsAdmAlmox === true || req.userSuperPowers === true) {
        try {
            const requisicao = new Requisicao(req.body);
            await requisicao.register();
            if (requisicao.reqErrors.length > 0) {
                const msg = [...requisicao.reqErrors]
                return res.render('requisicao', {
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
                })
            }
            return res.render('requisicao', {
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
                sucess: [`Requisição cadastrada com sucesso. Nº da requisição: ${requisicao.number}`]
            });
        } catch (err) {
            console.log(err)
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
};