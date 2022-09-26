const jwt = require('jsonwebtoken');
const User = require('../models/usersModel');
require('dotenv').config()


exports.login = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.login();
        //Erro de dados
        if (user.errors.length > 0) {
            req.flash('errors', user.errors);
            return res.redirect('back')
        }

        //Sucesso
        const id = user.user._id;
        const email = user.user.email;
        const name = user.user.nome;
        const isRequisitante = user.user.isRequisitante;
        const isAlmox = user.user.isAlmox;
        const isPat = user.user.isPat;
        const isAdmAlmox = user.user.isAdmAlmox;
        const isAdmPat = user.user.isAdmPat;
        const superPowers = user.user.superPowers;
        const matricula = user.user.matricula;
        const token = jwt.sign({ id, email, name, isRequisitante, isAlmox, isPat, isAdmAlmox, isAdmPat, superPowers, matricula }, process.env.SECRET_KEY, { expiresIn: '1d' });
        return res.cookie('access_token', `Bearer ${token}`).redirect(`/home/${id}`);
    } catch (err) {
        console.log(err)
    }
}

exports.logout = async (req, res) => {
    res.cookie('access_token', 'logout').redirect('/');
}
