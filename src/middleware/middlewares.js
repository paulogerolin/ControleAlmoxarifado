const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    const authorizarion = req.cookies.access_token;

    if (!authorizarion) {
        req.flash('errors', 'Necessário Login para acessar esta página!');
        return res.status(401).redirect('/');
    }

    const [texto, token] = authorizarion.split(' ');
    try {
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).redirect('/');//'Invalid Token'
            }
            const { id, email, name, isRequisitante, isAlmox, isPat, isAdmAlmox, isAdmPat, superPowers, matricula } = user;
            req.userId = id;
            req.userEmail = email;
            req.userName = name;
            req.userIsRequisitante = isRequisitante
            req.userIsAlmox = isAlmox;
            req.userIsPat = isPat;
            req.userIsAdmAlmox = isAdmAlmox;
            req.userIsAdmPat = isAdmPat;
            req.userSuperPowers = superPowers;
            req.userMatricula = matricula;
            //if(req.params.id == req.userId) console.log('verify')
            next();
        });
    } catch {
        req.flash('errors', 'Necessário Login para acessar esta página!');
        return res.redirect('back').status(401);
    }
}

exports.checkCsrf = (err, req, res, next) => {
    if (err) {
        return res.render('./includes/404')
    }
    next();
}

exports.csrf = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}


exports.msgFlash = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.sucess = req.flash('sucess');
    next();
}

exports.session = (req, res, next) => {
    res.locals.user = req.session.user;
}