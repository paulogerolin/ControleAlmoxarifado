//Inicialização
require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
//const helmet = require('helmet');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');


//Inicialização Middleware
const middleware = require('./src/middleware/middlewares');


//Conexão MongoDB
mongoose.connect(process.env.connectDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('Ready');
    })
    .catch(e => console.log(e));

//Configuração servidor
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrf({ cookie: true }));
app.use(middleware.checkCsrf);
app.use(middleware.csrf);
/* app.use(
    helmet.contentSecurityPolicy({
        directives:{
            "default-src": ["'self'", 'https://unpkg.com/'],
            "script-src": ["'self'", 'https://unpkg.com/'],
            "style-src": ["'self'", 'https://unpkg.com/']
        }
    })
); */

//Configuração EJS
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

//Configuração Session
const sessionOption = session({
    secret: process.env.SECRET_KEY,
    store: MongoStore.create({ mongoUrl: process.env.connectDB }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOption);
app.use(flash());
app.use(middleware.msgFlash)
app.use(routes);


//Middleware Global

//Conexão PORT - Server Listen
const PORT = process.env.PORT || 3000;
app.on('Ready', () => { app.listen(PORT)})
