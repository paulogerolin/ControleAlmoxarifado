const Item = require('../models/itensModel');

exports.render = (req, res) => {
    if (req.userIsAdmAlmox === true || req.userSuperPowers === true) {
        res.render('addItem', {
            erros: '',
            sucess: '',
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
            const item = new Item();
            await item.search();
            res.status(200).json(item.lista);
        } catch (err) {
            console.log(err);
        }
    } else {
        res.status(401).json('Usuário não possui autorização.');
    }
}

exports.item = async (req, res) => {
    if (req.userIsAdmAlmox === true || req.userSuperPowers === true) {
        try {
            const item = new Item(req.body);
            await item.register();
            if (item.iErrors.length > 0) {
                return res.render('addItem', {
                    erros: item.iErrors,
                    sucess: '',
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
            }
            return res.render('addItem', {
                erros: '',
                sucess: ['Item cadastrado com sucesso'],
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