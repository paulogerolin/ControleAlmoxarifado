exports.home = (req, res) => {
    res.render('home', { 
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