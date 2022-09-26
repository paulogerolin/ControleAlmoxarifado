const User = require('../models/usersModel');

exports.render = (req, res) => {
    if (req.userSuperPowers === true) {
        res.render('permissoes', {
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

exports.lista = async (req, res) => {
    if (req.userSuperPowers === true) {
        const user = new User();
        let lista = await user.lista();
        res.status(200).json(lista);
    } else {
        res.status(401).json('Usuário não possui permissão.')
    }
}

exports.alteraPermissoes = async (req, res) => {
    if (req.userSuperPowers === true) {
        const user = new User(req.body);
        await user.verifyPassword();
        if (user.errors.length > 0) {
            const msg = [...user.errors]
            return res.render('permissoes', {
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
        await user.changePermissoes();
        return res.render('permissoes', {
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
            sucess: ['Alteração feita com sucesso.']
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