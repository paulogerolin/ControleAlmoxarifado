const express = require('express');
const route = express.Router();

const multer = require('multer');
const multerConfig = require('./src/configs/multerConfig');

const indexController = require('./src/controllers/indexController')
const homeController = require('./src/controllers/homeController');
const cadastraController = require('./src/controllers/cadastraController');
const loginController = require('./src/controllers/loginController');
const estoqueController = require('./src/controllers/estoqueController');
const atendimentoController = require('./src/controllers/atendimentoController');
const requisicaoController = require('./src/controllers/requisicaoController');
const lancamentoController = require('./src/controllers/lancamentoController');
const itemController = require('./src/controllers/itemController');
const permissoesController = require('./src/controllers/permissoesController');
const middleware = require('./src/middleware/middlewares');

const upload = multer(multerConfig)

route.get('/', (req, res) => {
    res.redirect('/index')
})

route.get('/index', indexController.index);

route.post('/login', loginController.login);
route.post('/logout', loginController.logout);

route.get('/home/:id', middleware.auth, homeController.home);

route.get('/cadastra/:id', middleware.auth, cadastraController.cadastra);
route.post('/cadastra/:id', middleware.auth, cadastraController.registro);

route.get('/permissoes/:id', middleware.auth, permissoesController.render);
route.get('/permissoes/:id/listaUser', middleware.auth, permissoesController.lista);
route.post('/permissoes/:id', middleware.auth, permissoesController.alteraPermissoes);

route.get('/estoque/:id', middleware.auth, estoqueController.render);
route.get('/estoque/:id/data', middleware.auth, estoqueController.lista);

route.get('/item/:id', middleware.auth, itemController.render);
route.get('/item/:id/listaItens', middleware.auth, itemController.lista);
route.post('/item/:id', middleware.auth, itemController.item);

route.get('/lancamento/:id', middleware.auth, lancamentoController.render);
route.post('/lancamento/:id', middleware.auth, upload.single('filePDF'), lancamentoController.cadastra);

route.get('/requisicao/:id', middleware.auth, requisicaoController.render);
route.get('/requisicao/:id/listaRequisicoes', middleware.auth, requisicaoController.lista);
route.post('/requisicao/:id', middleware.auth, requisicaoController.cadastra);

route.get('/atendimento/:id', middleware.auth, atendimentoController.render);
route.get('/atendimento/lista', middleware.auth, atendimentoController.render);
route.post('/atendimento/:id/reqAtendida', middleware.auth, atendimentoController.atender);

route.get('/logout', loginController.logout);

module.exports = route;


