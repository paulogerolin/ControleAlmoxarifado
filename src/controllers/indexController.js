const jwt = require('jsonwebtoken');

exports.index = (req, res) => {
    const authorizarion = req.cookies.access_token;
    if (!authorizarion) return res.render('index', { email: '', id: null });
    if (authorizarion == 'logout') return res.render('index', { email: '', id: null });

    const [texto, token] = authorizarion.split(' ');
    try {
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            const { email } = user;
            const emailToken = email;
            return res.render('index', { email: emailToken, id: null });
        });
    } catch (err) {
        console.log(err);
    }
}