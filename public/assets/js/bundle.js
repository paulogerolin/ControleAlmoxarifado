/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/cep.js":
/*!****************************!*\
  !*** ./src/helpers/cep.js ***!
  \****************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//CEP
var cep = document.getElementById('cepCad');

if (cep) {
  var getCEP = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(numCep) {
      var txtEnd, txtBairro, txtCid, txtEst, afterInfo, divHidden, divHidden2, urlViaCep, fetchCep, resCep;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              txtEnd = document.getElementById('enderecoCad');
              txtBairro = document.getElementById('bairroCad');
              txtCid = document.getElementById('cidadeCad');
              txtEst = document.getElementById('ufCad');
              afterInfo = document.querySelector('.afterInfo');
              divHidden = document.querySelector('.divHidden');
              divHidden2 = document.querySelector('.divHidden2');
              urlViaCep = "http://viacep.com.br/ws/".concat(numCep, "/json");
              _context.next = 10;
              return fetch(urlViaCep);

            case 10:
              fetchCep = _context.sent;
              _context.next = 13;
              return fetchCep.json();

            case 13:
              resCep = _context.sent;

              if (resCep) {
                afterInfo.style.display = 'flex';
                afterInfo.style.flexDirection = 'column';
                divHidden.style.display = 'flex';
                divHidden.style.flexDirection = 'row';
                divHidden2.style.display = 'flex';
                divHidden2.style.flexDirection = 'row';
                txtEnd.value = resCep.logradouro;
                txtBairro.value = resCep.bairro;
                txtCid.value = resCep.localidade;
                txtEst.value = resCep.uf;
              }

              if (resCep.logradouro == undefined) {
                window.alert('CEP inválido');
                txtEnd.value = '';
                txtBairro.value = '';
                txtCid.value = '';
                txtEst.value = '';
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getCEP(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  cep.addEventListener('keyup', function () {
    if (cep.value.length == 8 || cep.value.length == 9) {
      getCEP(cep.value);
    }
  });
}
/*
var imgCep = document.getElementById('imgCep')
imgCep.addEventListener('click', () => {
    var win = window.open('https://buscacepinter.correios.com.br/app/localidade_logradouro/index.php', '_blank')
    win.focus();
})
*/

/***/ }),

/***/ "./src/helpers/organizaCpf.js":
/*!************************************!*\
  !*** ./src/helpers/organizaCpf.js ***!
  \************************************/
/***/ (() => {

var cpf = document.getElementById('cpfCad');

if (cpf) {
  cpf.addEventListener('keyup', function () {
    if (cpf.value.length == 11) {
      var array = [];

      for (var cjt = 0; cjt <= 3; cjt++) {
        var pedaco = cpf.value.slice(cjt * 3, cjt * 3 + 3);
        array.push(pedaco);
      }
    }

    cpf.value = "".concat(array[0], ".").concat(array[1], ".").concat(array[2], "-").concat(array[3]);
  });
}

;

/***/ }),

/***/ "./src/helpers/submit.js":
/*!*******************************!*\
  !*** ./src/helpers/submit.js ***!
  \*******************************/
/***/ (() => {

var nome = document.getElementById('nomeCad');

if (nome) {
  nome.addEventListener('keyup', function () {
    localStorage.setItem('nome', nomeCad.value);
  });
}

var cpf = document.getElementById('cpfCad');

if (cpf) {
  cpf.addEventListener('keyup', function () {
    localStorage.setItem('cpf', cpf.value);
  });
}

var email = document.getElementById('emailCad');

if (email) {
  email.addEventListener('keyup', function () {
    localStorage.setItem('email', email.value);
  });
}

;
var senha = document.getElementById('senhaCad');

if (senha) {
  senha.addEventListener('keyup', function () {
    localStorage.setItem('senha', senha.value);
  });
}

;
var chksenha = document.getElementById('chksenhaCad');

if (chksenha) {
  chksenha.addEventListener('keyup', function () {
    localStorage.setItem('chksenha', chksenha.value);
  });
}

;
var dia = document.getElementById('diaCad');

if (dia) {
  dia.addEventListener('keyup', function () {
    localStorage.setItem('dia', dia.value);
  });
}

;
var mes = document.getElementById('mesCad');

if (mes) {
  mes.addEventListener('keyup', function () {
    localStorage.setItem('mes', mes.value);
  });
}

;
var ano = document.getElementById('anoCad');

if (ano) {
  ano.addEventListener('keyup', function () {
    localStorage.setItem('ano', ano.value);
  });
}

;
var cep = document.getElementById('cepCad');

if (cep) {
  cep.addEventListener('keyup', function () {
    localStorage.setItem('cep', cep.value);
  });
}

;
var num = document.getElementById('numCad');

if (num) {
  num.addEventListener('keyup', function () {
    localStorage.setItem('num', num.value);
  });
}

;

window.onload = function () {
  if (localStorage.nome == undefined) {
    localStorage.nome = '';
  } else {
    var nome = localStorage.nome;
    var nomeCad = document.getElementById('nomeCad');
    if (nomeCad) nomeCad.value = nome;
  }

  if (localStorage.cpf == undefined) {
    localStorage.cpf = '';
  } else {
    var cpf = localStorage.cpf;
    var cpfCad = document.getElementById('cpfCad');
    if (cpfCad) cpfCad.value = cpf;
  }

  if (localStorage.email == undefined) {
    localStorage.email = '';
  } else {
    var email = localStorage.email;
    var emailCad = document.getElementById('emailCad');
    if (emailCad) emailCad.value = email;
  }

  if (localStorage.senha == undefined) {
    localStorage.senha = '';
  } else {
    var senha = localStorage.senha;
    var senhaCad = document.getElementById('senhaCad');
    if (senhaCad) senhaCad.value = senha;
  }

  if (localStorage.chksenha == undefined) {
    localStorage.chksenha = '';
  } else {
    var chksenha = localStorage.chksenha;
    var chksenhaCad = document.getElementById('chksenhaCad');
    if (chksenhaCad) chksenhaCad.value = chksenha;
  }

  if (localStorage.dia == undefined) {
    localStorage.dia = '';
  } else {
    var dia = localStorage.dia;
    var diaCad = document.getElementById('diaCad');
    if (diaCad) diaCad.value = dia;
  }

  if (localStorage.mes == undefined) {
    localStorage.mes = '';
  } else {
    var mes = localStorage.mes;
    var mesCad = document.getElementById('mesCad');
    if (mesCad) mesCad.value = mes;
  }

  if (localStorage.ano == undefined) {
    localStorage.ano = '';
  } else {
    var ano = localStorage.ano;
    var anoCad = document.getElementById('anoCad');
    if (anoCad) anoCad.value = ano;
  }

  if (localStorage.cep == undefined) {
    localStorage.cep = '';
  } else {
    var cep = localStorage.cep;
    var cepCad = document.getElementById('cepCad');
    if (cepCad) cepCad.value = cep;
  }

  if (localStorage.num == undefined) {
    localStorage.num = '';
  } else {
    var num = localStorage.num;
    var numCad = document.getElementById('numCad');
    if (numCad) numCad.value = num;
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/assets/css/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/assets/css/style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: white;\r\n    align-items: center;\r\n    font-size: 12pt;\r\n    color: black;\r\n    justify-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    font-family: sans-serif;\r\n}\r\n\r\ninput{\r\n    border: none;\r\n    border-bottom: solid 1px #ccc;\r\n    text-align: center;\r\n}\r\n\r\n.show {\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 1200px;\r\n    background-color: #20B2AA;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.cadastro {\r\n    background-color: white;\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    height: auto;\r\n    margin-right: 5%;\r\n    margin-left: 10%;\r\n    text-align: center;\r\n}\r\n\r\n/*///////////////////////////////////////////////////////////////////////////*/\r\n/*LOGIN*/\r\nform#login {\r\n    position: relative;\r\n    top: -400px;\r\n    background-color: white;\r\n    border-radius: 20px;\r\n    width: 600px;\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.login {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.login div {\r\n    margin: 5px;\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.login div input {\r\n    margin: 5px;\r\n    box-shadow: 0 0 0 0;\r\n    outline: 0;\r\n    border: 0;\r\n    border-bottom: solid 1px #ccc;\r\n}\r\n\r\n.login div label {\r\n    margin: 5px;\r\n}\r\n\r\n.headers {\r\n    height: 50px;\r\n    width: 100%;\r\n    position: relative;\r\n    top: 0px;\r\n    right: 0px;\r\n    background-color: white;\r\n    box-shadow: 0 2px #ccc;\r\n    display: flex;\r\n    align-items: center;\r\n    z-index: 99;\r\n}\r\n\r\n.head {\r\n    font: normal 20pt sans-serif;\r\n    padding-left: 5px;\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.links {\r\n    font: normal 10pt sans-serif;\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nfooter {\r\n    text-align: center;\r\n    position: relative;\r\n    top: -400px;\r\n}\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*CADASTRA*/\r\n\r\n.fundoCadastro {\r\n    background: white;\r\n    width: 100%;\r\n    height: 750px;\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    display: flex;\r\n    justify-content: center;\r\n    border-radius: 0 0 20px 20px;\r\n}\r\n\r\nform#cadastra {\r\n    width: 700px;\r\n    height: fit-content;\r\n    margin-top: 50px;\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    align-items: center;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n    left: -200px;\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n\r\n.info {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.info input {\r\n    display: flex;\r\n    justify-content: center;\r\n    box-shadow: 0 0 0 0;\r\n    outline: 0;\r\n    border: 0;\r\n    border-bottom: solid 1px #ccc;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.afterInfo {\r\n    width: 100%;\r\n    display: none;\r\n    position: relative;\r\n    justify-content: space-between;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.afterInfo input {\r\n    box-shadow: 0 0 0 0;\r\n    outline: 0;\r\n    border: 0;\r\n    border-bottom: solid 1px #ccc;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.divHidden div,\r\n.divHidden2 div {\r\n    box-shadow: 0 0 0 0;\r\n    outline: 0;\r\n    border: 0;\r\n    border-bottom: solid 1px #ccc;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    text-align: left;\r\n}\r\n\r\n.divHidden,\r\n.divHidden2 {\r\n    justify-content: space-between;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.size0 {\r\n    width: 90%;\r\n}\r\n\r\n.size1 {\r\n    width: 50%;\r\n}\r\n\r\n.size2 {\r\n    width: 20%;\r\n}\r\n\r\n.size3 {\r\n    width: 30%;\r\n}\r\n\r\n.size4 {\r\n    width: 60%;\r\n}\r\n\r\n.size5 {\r\n    width: 10%;\r\n}\r\n\r\n.nascimento {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n\r\ninput#go {\r\n    width: 200px;\r\n    height: 50px;\r\n    font-size: 12pt;\r\n    border-radius: 15px;\r\n    background-color: #20B2AA;\r\n    box-shadow: 0 0 0 0;\r\n    outline: 0;\r\n    border: 0;\r\n    transition: ease 0.5s;\r\n    cursor: pointer;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n\r\n.sucess {\r\n    display: block;\r\n    background-color: #61b36e;\r\n    border: solid 3px green;\r\n    width: 400px;\r\n    white-space: normal;\r\n    padding: 10px;\r\n    text-align: left;\r\n    margin-bottom: 10px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.erros {\r\n    display: block;\r\n    background-color: #d16e6e;\r\n    border: solid 3px red;\r\n    width: 400px;\r\n    padding: 10px;\r\n    text-align: left;\r\n    margin-bottom: 10px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.erroSenha {\r\n    text-align: left;\r\n    color: #ccc;\r\n    font-size: 8pt;\r\n}\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*HOME*/\r\n\r\n.infoHome {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////////////////*/\r\n/*MENU*/\r\n\r\n.conteudo {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: auto;\r\n}\r\n\r\n.menuGlobal {\r\n    position: fixed;\r\n    width: 50px;\r\n    height: 100%;\r\n    background-color: #20B2AA;\r\n    box-sizing: initial;\r\n    transition: width ease 0.5s;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.menuGlobal.active {\r\n    width: 200px;\r\n}\r\n\r\n.menuGlobal ul {\r\n    position: absolute;\r\n    top: -10px;\r\n    left: -40px;\r\n    width: 100%;\r\n}\r\n\r\n.menuGlobal ul li {\r\n    position: relative;\r\n    list-style: none;\r\n    width: 100%;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n}\r\n\r\n.menuGlobal ul li.active {\r\n    background-color: white;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.menuGlobal ul li a {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    display: flex;\r\n    text-decoration: none;\r\n    align-items: center;\r\n}\r\n\r\n.menuGlobal ul li.active a .title,\r\n.menuGlobal ul li.active a .icons {\r\n    color: #20B2AA;\r\n}\r\n\r\n.menuGlobal ul li b:nth-child(1) {\r\n    position: absolute;\r\n    top: -10px;\r\n    height: 10px;\r\n    width: 100%;\r\n    background: white;\r\n    display: none;\r\n}\r\n\r\n.menuGlobal ul li b:nth-child(1)::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-bottom-right-radius: 10px;\r\n    background: #20B2AA;\r\n}\r\n\r\n.menuGlobal ul li b:nth-child(2) {\r\n    position: absolute;\r\n    bottom: -10px;\r\n    height: 10px;\r\n    width: 100%;\r\n    background: white;\r\n    display: none;\r\n}\r\n\r\n.menuGlobal ul li b:nth-child(2)::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-top-right-radius: 10px;\r\n    background: #20B2AA;\r\n}\r\n\r\n.menuGlobal ul li.active b:nth-child(1),\r\n.menuGlobal ul li.active b:nth-child(2) {\r\n    display: block;\r\n}\r\n\r\n.icons {\r\n    position: relative;\r\n    display: block;\r\n    min-width: 50px;\r\n    font-size: 20pt;\r\n    width: 30%;\r\n    color: white;\r\n    line-height: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.title {\r\n    position: relative;\r\n    display: block;\r\n    line-height: 50px;\r\n    white-space: nowrap;\r\n    font-size: 13pt;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////////////////*/\r\n/*LANÇAMENTOS*/\r\n\r\n.grupoLan {\r\n    width: auto;\r\n    height: auto;\r\n    position: relative;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.infoLanGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n/*TABELAS LANÇAMENTO*/\r\n\r\n.tabelaLancamento {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 600px;\r\n    height: 250px;\r\n    text-align: center;\r\n    justify-items: center;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n\r\ndiv#tituloLancamento {\r\n    font-size: 18pt;\r\n    color: white;\r\n    background-color: #20B2AA;\r\n    border-radius: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.cabecalho {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px 0 10px 0;\r\n    border-bottom: solid 1px #20B2AA;\r\n    justify-content: normal;\r\n}\r\n\r\n.cabecalho div {\r\n    width: 200px;\r\n    font-size: 18pt;\r\n}\r\n\r\n\r\n.tabelaLancamento table {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.infoLancamento {\r\n    display: block;\r\n    overflow-x: hidden;\r\n    font-size: 10pt;\r\n    height: 100px;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.infoLancamento td {\r\n    width: 200px;\r\n    border-bottom: solid 1px #20B2AA;\r\n}\r\n\r\n.lancamento {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    margin-left: 50px;\r\n    padding: 20px;\r\n    width: auto;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\ninput#addCodigo {\r\n    width: 50px;\r\n}\r\n\r\n/*BUSCA LANÇAMENTO*/\r\n\r\n.buscaLancamento {\r\n    width: 200px;\r\n    position: relative;\r\n    border: transparent;\r\n    border-bottom: solid 2px #20B2AA;\r\n}\r\n\r\n.buscaLancamento:focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0;\r\n}\r\n\r\n\r\n.adiciona {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.dadosAdd {\r\n    width: 900px;\r\n    text-align: justify;\r\n    color: black;\r\n    font: normal bold;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.dadosAdd div {\r\n    width: 100%;\r\n    display: flex;\r\n    text-align: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/*INPUTS LANÇAMENTOS*/\r\n.tips {\r\n    font-size: 8pt;\r\n    color: #A9A9A9;\r\n    position: relative;\r\n    top: -5px;\r\n    left: 800px;\r\n}\r\n\r\ninput#matriculaReq {\r\n    width: 40px;\r\n    margin-right: 200px;\r\n}\r\n\r\ninput#nameReq {\r\n    width: 500px;\r\n}\r\n\r\ninput#nfe {\r\n    width: 60px;\r\n}\r\n\r\ninput#anoNfe {\r\n    width: 80px;\r\n}\r\n\r\ninput#addFornecedor {\r\n    width: 300px;\r\n}\r\n\r\ninput#addCnpj {\r\n    width: 200px;\r\n}\r\n\r\n.cabecalhoNfeLan{\r\n    margin-bottom: 20px !important;\r\n}\r\n\r\ninput#itemLan{\r\n    width: 40px;\r\n    margin-right: 810px;\r\n}\r\n\r\ninput#addCodigo {\r\n    width: 40px;\r\n}\r\n\r\ninput#addProduto {\r\n    width: 250px;\r\n}\r\n\r\ninput#addUm{\r\n    width: 40px;\r\n}\r\n\r\ninput#addQtd{\r\n    width: 40px;  \r\n}\r\n\r\ninput#addValor{\r\n    width: 40px;\r\n}\r\n\r\n.spaceItens {\r\n    width: 900px;\r\n    height: 2px;\r\n    background: black;\r\n    margin-top: 10px !important;\r\n    margin-bottom: 10px !important;\r\n}\r\n\r\n.btnLanca {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnLanca:hover {\r\n    background: #2ec0b9;\r\n}\r\n\r\n.btnAddItem {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnAddItem:hover {\r\n    background: #2ec0b9;\r\n}\r\n\r\n.btnRmvItem {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnRmvItem:hover {\r\n    background: #2ec0b9;\r\n}\r\n\r\n.btnClear {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnClear:hover {\r\n    background: #2ec0b9;\r\n}\r\n\r\ndiv#button {\r\n    margin-top: 20px;\r\n}\r\n\r\n.insertPDF {\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n\r\n.hide {\r\n    width: 150px;\r\n    padding: 10px;\r\n    background: #2ec0b9;\r\n    cursor: pointer;\r\n    display: none;\r\n    transition: ease 0.5s;\r\n    border-radius: 15px;\r\n    border: none;\r\n    text-align: center;\r\n}\r\n\r\n.hide a {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.hide:hover {\r\n    background: #20B2AA;\r\n}\r\n\r\n\r\n/*////////////////////////////////////////////////////////////////////////*/\r\n/*ADICIONA ITEM*/\r\n\r\n.infoAddItemGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n.grupoAddItem {\r\n    width: 550px;\r\n    height: auto;\r\n    position: relative;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n.grupoAddItem h3 {\r\n    text-align: left;\r\n}\r\n\r\n.grupoAddItem form div {\r\n    text-align: left;\r\n    width: 100%;\r\n}\r\n\r\ninput#addItemIn {\r\n    width: 240px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput#addItemUm {\r\n    width: 175px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.btnAdd {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnAdd:hover {\r\n    background: #2ec0b9;\r\n}\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*REQUISIÇÃO*/\r\n\r\n.infoReqGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n.grupoReq {\r\n    width: auto;\r\n    height: auto;\r\n    position: relative;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.dadosReq {\r\n    width: 900px;\r\n    text-align: justify;\r\n    color: black;\r\n    font: normal bold;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.dadosReq div {\r\n    width: 100%;\r\n    display: flex;\r\n    text-align: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.tabelaReq {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 600px;\r\n    height: 250px;\r\n    text-align: center;\r\n    justify-items: center;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n\r\ndiv#tituloReq {\r\n    font-size: 18pt;\r\n    color: white;\r\n    background-color: #20B2AA;\r\n    border-radius: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.cabecalhoReq {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px 0 10px 0;\r\n    border-bottom: solid 1px #20B2AA;\r\n    justify-content: normal;\r\n}\r\n\r\n.cabecalhoReq div {\r\n    width: 200px;\r\n    font-size: 15pt;\r\n}\r\n\r\n\r\n.tabelaReq table {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.infoReq {\r\n    display: block;\r\n    overflow-x: hidden;\r\n    font-size: 10pt;\r\n    height: 100px;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.infoReq td {\r\n    width: 200px;\r\n    border-bottom: solid 1px #20B2AA;\r\n}\r\n\r\n.requisicao {\r\n    position: relative;\r\n    margin-left: 50px;\r\n    width: 900px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\ninput#justificativaReq{\r\n    width: 800px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\ninput#itemReq{\r\n    width: 40px;\r\n}\r\n\r\ninput#addCodigoReq{\r\n    width: 40px;\r\n}\r\n\r\ninput#addProdutoReq{\r\n    width: 300px;\r\n}\r\n\r\ninput#addQtdReq{\r\n    width: 40px;\r\n}\r\n\r\ninput#addUmReq{\r\n    width: 40px;\r\n}\r\n\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*ATENDIMENTO*/\r\n\r\n.infoAtdGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n.grupoAtd {\r\n    width: auto;\r\n    height: auto;\r\n    position: relative;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.dadosReqAtd {\r\n    width: 900px;\r\n    text-align: justify;\r\n    color: black;\r\n    font: normal bold;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.dadosReqAtd div {\r\n    width: 100%;\r\n    display: flex;\r\n    text-align: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.tabelaAtd {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    width: 600px;\r\n    height: 250px;\r\n    text-align: center;\r\n    justify-items: center;\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n\r\ndiv#tituloAtd {\r\n    font-size: 18pt;\r\n    color: white;\r\n    background-color: #20B2AA;\r\n    border-radius: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.cabecalhoAtd {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px 0 10px 0;\r\n    border-bottom: solid 1px #20B2AA;\r\n    justify-content: normal;\r\n}\r\n\r\n.cabecalhoAtd div {\r\n    width: 120px;\r\n    font-size: 13pt;\r\n}\r\n\r\n.tableAtd {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.infoAtd {\r\n    display: block;\r\n    overflow-x: hidden;\r\n    font-size: 10pt;\r\n    height: 100px;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.infoAtd td {\r\n    width: 200px;\r\n    border-bottom: solid 1px #20B2AA;\r\n}\r\n\r\n.atendimento {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    left: 50px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.cabecalhoReqAtd {\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.divItemAtd {\r\n    width: 100%;\r\n}\r\n\r\n.matriculaReqAtd {\r\n    width: 40px;\r\n    margin-right: 210px;\r\n}\r\n\r\n.nameReqAtd {\r\n    width: 500px;\r\n}\r\n\r\n.justificativaReqAtd {\r\n    width: 800px;\r\n}\r\n\r\n.divItemAtd {\r\n    align-items: center;\r\n}\r\n\r\n.codReqAtd {\r\n    width: 40px;\r\n}\r\n\r\n.itemReqAtd {\r\n    width: 250px;\r\n}\r\n\r\n.qtdReq {\r\n    width: 40px;\r\n}\r\n\r\n.qtdEstAtd{\r\n    width: 40px;\r\n}\r\n.umReqAtd {\r\n    width: 40px;\r\n}\r\n\r\n.qtdReqAtd {\r\n    width: 40px;\r\n}\r\n\r\n.labelLarge {\r\n    margin-left: 400px;\r\n}\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*ESTOQUE*/\r\n\r\n.infoEstoqueGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n.grupoEst {\r\n    width: auto;\r\n    height: auto;\r\n    position: relative;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.tabelaEstoque {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 1000px;\r\n    height: 500px;\r\n    text-align: center;\r\n    justify-items: center;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n\r\ndiv#tituloEstoque {\r\n    font-size: 18pt;\r\n    color: white;\r\n    background-color: #20B2AA;\r\n    border-radius: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.cabecalhoEstoque {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px 0 10px 0;\r\n    border-bottom: solid 1px #20B2AA;\r\n    justify-content: normal;\r\n}\r\n\r\n.cabecalhoEstoque div {\r\n    width: 250px;\r\n    font-size: 15pt;\r\n}\r\n\r\n.tableEstoque {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.infoEstoque {\r\n    display: block;\r\n    overflow: auto;\r\n    font-size: 13pt;\r\n    height: 350px;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.infoEstoque td {\r\n    width: 250px;\r\n    border-bottom: solid 1px #20B2AA;\r\n}\r\n\r\n\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*Permissões*/\r\n\r\n.infoPermissaoGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n\r\n}\r\n\r\n.grupoPermissao {\r\n    width: fit-content;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n.formUser {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    justify-content: center;\r\n}\r\n\r\n.formDadosUser {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.formDadosUser input {\r\n    width: 200px;\r\n    height: 19px;\r\n    padding: 0;\r\n    text-align: center;\r\n    border-width: 0px;\r\n    border-bottom: solid 1px #ccc;\r\n}\r\n\r\n.formDadosUser select {\r\n    width: 200px;\r\n    height: 20px;\r\n    text-align: center;\r\n    border-width: 0px;\r\n    border-bottom: solid 1px #ccc;\r\n}\r\n\r\n.dadosAdmin {\r\n    width: 100%;\r\n    margin-top: 40px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.dadosAdmin input {\r\n    border: none;\r\n    border-bottom: solid 1px #ccc;\r\n    margin-right: 10px;\r\n}\r\n\r\n.userPermissao {\r\n    display: flex;\r\n    padding: 5px 0;\r\n}\r\n\r\n.cabecalhotableUser {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.cabecalhotableUser div {\r\n    width: 200px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.btnPermissao {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnPermissao:hover {\r\n    background: #2ec0b9;\r\n}", "",{"version":3,"sources":["webpack://./public/assets/css/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: white;\r\n    align-items: center;\r\n    font-size: 12pt;\r\n    color: black;\r\n    justify-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    font-family: sans-serif;\r\n}\r\n\r\ninput{\r\n    border: none;\r\n    border-bottom: solid 1px #ccc;\r\n    text-align: center;\r\n}\r\n\r\n.show {\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 1200px;\r\n    background-color: #20B2AA;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.cadastro {\r\n    background-color: white;\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    height: auto;\r\n    margin-right: 5%;\r\n    margin-left: 10%;\r\n    text-align: center;\r\n}\r\n\r\n/*///////////////////////////////////////////////////////////////////////////*/\r\n/*LOGIN*/\r\nform#login {\r\n    position: relative;\r\n    top: -400px;\r\n    background-color: white;\r\n    border-radius: 20px;\r\n    width: 600px;\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.login {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.login div {\r\n    margin: 5px;\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.login div input {\r\n    margin: 5px;\r\n    box-shadow: 0 0 0 0;\r\n    outline: 0;\r\n    border: 0;\r\n    border-bottom: solid 1px #ccc;\r\n}\r\n\r\n.login div label {\r\n    margin: 5px;\r\n}\r\n\r\n.headers {\r\n    height: 50px;\r\n    width: 100%;\r\n    position: relative;\r\n    top: 0px;\r\n    right: 0px;\r\n    background-color: white;\r\n    box-shadow: 0 2px #ccc;\r\n    display: flex;\r\n    align-items: center;\r\n    z-index: 99;\r\n}\r\n\r\n.head {\r\n    font: normal 20pt sans-serif;\r\n    padding-left: 5px;\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.links {\r\n    font: normal 10pt sans-serif;\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nfooter {\r\n    text-align: center;\r\n    position: relative;\r\n    top: -400px;\r\n}\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*CADASTRA*/\r\n\r\n.fundoCadastro {\r\n    background: white;\r\n    width: 100%;\r\n    height: 750px;\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    display: flex;\r\n    justify-content: center;\r\n    border-radius: 0 0 20px 20px;\r\n}\r\n\r\nform#cadastra {\r\n    width: 700px;\r\n    height: fit-content;\r\n    margin-top: 50px;\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    align-items: center;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n    left: -200px;\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n\r\n.info {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.info input {\r\n    display: flex;\r\n    justify-content: center;\r\n    box-shadow: 0 0 0 0;\r\n    outline: 0;\r\n    border: 0;\r\n    border-bottom: solid 1px #ccc;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.afterInfo {\r\n    width: 100%;\r\n    display: none;\r\n    position: relative;\r\n    justify-content: space-between;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.afterInfo input {\r\n    box-shadow: 0 0 0 0;\r\n    outline: 0;\r\n    border: 0;\r\n    border-bottom: solid 1px #ccc;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.divHidden div,\r\n.divHidden2 div {\r\n    box-shadow: 0 0 0 0;\r\n    outline: 0;\r\n    border: 0;\r\n    border-bottom: solid 1px #ccc;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    text-align: left;\r\n}\r\n\r\n.divHidden,\r\n.divHidden2 {\r\n    justify-content: space-between;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.size0 {\r\n    width: 90%;\r\n}\r\n\r\n.size1 {\r\n    width: 50%;\r\n}\r\n\r\n.size2 {\r\n    width: 20%;\r\n}\r\n\r\n.size3 {\r\n    width: 30%;\r\n}\r\n\r\n.size4 {\r\n    width: 60%;\r\n}\r\n\r\n.size5 {\r\n    width: 10%;\r\n}\r\n\r\n.nascimento {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n\r\ninput#go {\r\n    width: 200px;\r\n    height: 50px;\r\n    font-size: 12pt;\r\n    border-radius: 15px;\r\n    background-color: #20B2AA;\r\n    box-shadow: 0 0 0 0;\r\n    outline: 0;\r\n    border: 0;\r\n    transition: ease 0.5s;\r\n    cursor: pointer;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n\r\n.sucess {\r\n    display: block;\r\n    background-color: #61b36e;\r\n    border: solid 3px green;\r\n    width: 400px;\r\n    white-space: normal;\r\n    padding: 10px;\r\n    text-align: left;\r\n    margin-bottom: 10px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.erros {\r\n    display: block;\r\n    background-color: #d16e6e;\r\n    border: solid 3px red;\r\n    width: 400px;\r\n    padding: 10px;\r\n    text-align: left;\r\n    margin-bottom: 10px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.erroSenha {\r\n    text-align: left;\r\n    color: #ccc;\r\n    font-size: 8pt;\r\n}\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*HOME*/\r\n\r\n.infoHome {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////////////////*/\r\n/*MENU*/\r\n\r\n.conteudo {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: auto;\r\n}\r\n\r\n.menuGlobal {\r\n    position: fixed;\r\n    width: 50px;\r\n    height: 100%;\r\n    background-color: #20B2AA;\r\n    box-sizing: initial;\r\n    transition: width ease 0.5s;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.menuGlobal.active {\r\n    width: 200px;\r\n}\r\n\r\n.menuGlobal ul {\r\n    position: absolute;\r\n    top: -10px;\r\n    left: -40px;\r\n    width: 100%;\r\n}\r\n\r\n.menuGlobal ul li {\r\n    position: relative;\r\n    list-style: none;\r\n    width: 100%;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n}\r\n\r\n.menuGlobal ul li.active {\r\n    background-color: white;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.menuGlobal ul li a {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    display: flex;\r\n    text-decoration: none;\r\n    align-items: center;\r\n}\r\n\r\n.menuGlobal ul li.active a .title,\r\n.menuGlobal ul li.active a .icons {\r\n    color: #20B2AA;\r\n}\r\n\r\n.menuGlobal ul li b:nth-child(1) {\r\n    position: absolute;\r\n    top: -10px;\r\n    height: 10px;\r\n    width: 100%;\r\n    background: white;\r\n    display: none;\r\n}\r\n\r\n.menuGlobal ul li b:nth-child(1)::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-bottom-right-radius: 10px;\r\n    background: #20B2AA;\r\n}\r\n\r\n.menuGlobal ul li b:nth-child(2) {\r\n    position: absolute;\r\n    bottom: -10px;\r\n    height: 10px;\r\n    width: 100%;\r\n    background: white;\r\n    display: none;\r\n}\r\n\r\n.menuGlobal ul li b:nth-child(2)::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-top-right-radius: 10px;\r\n    background: #20B2AA;\r\n}\r\n\r\n.menuGlobal ul li.active b:nth-child(1),\r\n.menuGlobal ul li.active b:nth-child(2) {\r\n    display: block;\r\n}\r\n\r\n.icons {\r\n    position: relative;\r\n    display: block;\r\n    min-width: 50px;\r\n    font-size: 20pt;\r\n    width: 30%;\r\n    color: white;\r\n    line-height: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.title {\r\n    position: relative;\r\n    display: block;\r\n    line-height: 50px;\r\n    white-space: nowrap;\r\n    font-size: 13pt;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////////////////*/\r\n/*LANÇAMENTOS*/\r\n\r\n.grupoLan {\r\n    width: auto;\r\n    height: auto;\r\n    position: relative;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.infoLanGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n/*TABELAS LANÇAMENTO*/\r\n\r\n.tabelaLancamento {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 600px;\r\n    height: 250px;\r\n    text-align: center;\r\n    justify-items: center;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n\r\ndiv#tituloLancamento {\r\n    font-size: 18pt;\r\n    color: white;\r\n    background-color: #20B2AA;\r\n    border-radius: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.cabecalho {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px 0 10px 0;\r\n    border-bottom: solid 1px #20B2AA;\r\n    justify-content: normal;\r\n}\r\n\r\n.cabecalho div {\r\n    width: 200px;\r\n    font-size: 18pt;\r\n}\r\n\r\n\r\n.tabelaLancamento table {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.infoLancamento {\r\n    display: block;\r\n    overflow-x: hidden;\r\n    font-size: 10pt;\r\n    height: 100px;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.infoLancamento td {\r\n    width: 200px;\r\n    border-bottom: solid 1px #20B2AA;\r\n}\r\n\r\n.lancamento {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    margin-left: 50px;\r\n    padding: 20px;\r\n    width: auto;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\ninput#addCodigo {\r\n    width: 50px;\r\n}\r\n\r\n/*BUSCA LANÇAMENTO*/\r\n\r\n.buscaLancamento {\r\n    width: 200px;\r\n    position: relative;\r\n    border: transparent;\r\n    border-bottom: solid 2px #20B2AA;\r\n}\r\n\r\n.buscaLancamento:focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0;\r\n}\r\n\r\n\r\n.adiciona {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.dadosAdd {\r\n    width: 900px;\r\n    text-align: justify;\r\n    color: black;\r\n    font: normal bold;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.dadosAdd div {\r\n    width: 100%;\r\n    display: flex;\r\n    text-align: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/*INPUTS LANÇAMENTOS*/\r\n.tips {\r\n    font-size: 8pt;\r\n    color: #A9A9A9;\r\n    position: relative;\r\n    top: -5px;\r\n    left: 800px;\r\n}\r\n\r\ninput#matriculaReq {\r\n    width: 40px;\r\n    margin-right: 200px;\r\n}\r\n\r\ninput#nameReq {\r\n    width: 500px;\r\n}\r\n\r\ninput#nfe {\r\n    width: 60px;\r\n}\r\n\r\ninput#anoNfe {\r\n    width: 80px;\r\n}\r\n\r\ninput#addFornecedor {\r\n    width: 300px;\r\n}\r\n\r\ninput#addCnpj {\r\n    width: 200px;\r\n}\r\n\r\n.cabecalhoNfeLan{\r\n    margin-bottom: 20px !important;\r\n}\r\n\r\ninput#itemLan{\r\n    width: 40px;\r\n    margin-right: 810px;\r\n}\r\n\r\ninput#addCodigo {\r\n    width: 40px;\r\n}\r\n\r\ninput#addProduto {\r\n    width: 250px;\r\n}\r\n\r\ninput#addUm{\r\n    width: 40px;\r\n}\r\n\r\ninput#addQtd{\r\n    width: 40px;  \r\n}\r\n\r\ninput#addValor{\r\n    width: 40px;\r\n}\r\n\r\n.spaceItens {\r\n    width: 900px;\r\n    height: 2px;\r\n    background: black;\r\n    margin-top: 10px !important;\r\n    margin-bottom: 10px !important;\r\n}\r\n\r\n.btnLanca {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnLanca:hover {\r\n    background: #2ec0b9;\r\n}\r\n\r\n.btnAddItem {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnAddItem:hover {\r\n    background: #2ec0b9;\r\n}\r\n\r\n.btnRmvItem {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnRmvItem:hover {\r\n    background: #2ec0b9;\r\n}\r\n\r\n.btnClear {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnClear:hover {\r\n    background: #2ec0b9;\r\n}\r\n\r\ndiv#button {\r\n    margin-top: 20px;\r\n}\r\n\r\n.insertPDF {\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n\r\n.hide {\r\n    width: 150px;\r\n    padding: 10px;\r\n    background: #2ec0b9;\r\n    cursor: pointer;\r\n    display: none;\r\n    transition: ease 0.5s;\r\n    border-radius: 15px;\r\n    border: none;\r\n    text-align: center;\r\n}\r\n\r\n.hide a {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.hide:hover {\r\n    background: #20B2AA;\r\n}\r\n\r\n\r\n/*////////////////////////////////////////////////////////////////////////*/\r\n/*ADICIONA ITEM*/\r\n\r\n.infoAddItemGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n.grupoAddItem {\r\n    width: 550px;\r\n    height: auto;\r\n    position: relative;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n.grupoAddItem h3 {\r\n    text-align: left;\r\n}\r\n\r\n.grupoAddItem form div {\r\n    text-align: left;\r\n    width: 100%;\r\n}\r\n\r\ninput#addItemIn {\r\n    width: 240px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput#addItemUm {\r\n    width: 175px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.btnAdd {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnAdd:hover {\r\n    background: #2ec0b9;\r\n}\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*REQUISIÇÃO*/\r\n\r\n.infoReqGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n.grupoReq {\r\n    width: auto;\r\n    height: auto;\r\n    position: relative;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.dadosReq {\r\n    width: 900px;\r\n    text-align: justify;\r\n    color: black;\r\n    font: normal bold;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.dadosReq div {\r\n    width: 100%;\r\n    display: flex;\r\n    text-align: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.tabelaReq {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 600px;\r\n    height: 250px;\r\n    text-align: center;\r\n    justify-items: center;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n\r\ndiv#tituloReq {\r\n    font-size: 18pt;\r\n    color: white;\r\n    background-color: #20B2AA;\r\n    border-radius: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.cabecalhoReq {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px 0 10px 0;\r\n    border-bottom: solid 1px #20B2AA;\r\n    justify-content: normal;\r\n}\r\n\r\n.cabecalhoReq div {\r\n    width: 200px;\r\n    font-size: 15pt;\r\n}\r\n\r\n\r\n.tabelaReq table {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.infoReq {\r\n    display: block;\r\n    overflow-x: hidden;\r\n    font-size: 10pt;\r\n    height: 100px;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.infoReq td {\r\n    width: 200px;\r\n    border-bottom: solid 1px #20B2AA;\r\n}\r\n\r\n.requisicao {\r\n    position: relative;\r\n    margin-left: 50px;\r\n    width: 900px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\ninput#justificativaReq{\r\n    width: 800px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\ninput#itemReq{\r\n    width: 40px;\r\n}\r\n\r\ninput#addCodigoReq{\r\n    width: 40px;\r\n}\r\n\r\ninput#addProdutoReq{\r\n    width: 300px;\r\n}\r\n\r\ninput#addQtdReq{\r\n    width: 40px;\r\n}\r\n\r\ninput#addUmReq{\r\n    width: 40px;\r\n}\r\n\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*ATENDIMENTO*/\r\n\r\n.infoAtdGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n.grupoAtd {\r\n    width: auto;\r\n    height: auto;\r\n    position: relative;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.dadosReqAtd {\r\n    width: 900px;\r\n    text-align: justify;\r\n    color: black;\r\n    font: normal bold;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.dadosReqAtd div {\r\n    width: 100%;\r\n    display: flex;\r\n    text-align: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.tabelaAtd {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    width: 600px;\r\n    height: 250px;\r\n    text-align: center;\r\n    justify-items: center;\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n\r\ndiv#tituloAtd {\r\n    font-size: 18pt;\r\n    color: white;\r\n    background-color: #20B2AA;\r\n    border-radius: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.cabecalhoAtd {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px 0 10px 0;\r\n    border-bottom: solid 1px #20B2AA;\r\n    justify-content: normal;\r\n}\r\n\r\n.cabecalhoAtd div {\r\n    width: 120px;\r\n    font-size: 13pt;\r\n}\r\n\r\n.tableAtd {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.infoAtd {\r\n    display: block;\r\n    overflow-x: hidden;\r\n    font-size: 10pt;\r\n    height: 100px;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.infoAtd td {\r\n    width: 200px;\r\n    border-bottom: solid 1px #20B2AA;\r\n}\r\n\r\n.atendimento {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    left: 50px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.cabecalhoReqAtd {\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.divItemAtd {\r\n    width: 100%;\r\n}\r\n\r\n.matriculaReqAtd {\r\n    width: 40px;\r\n    margin-right: 210px;\r\n}\r\n\r\n.nameReqAtd {\r\n    width: 500px;\r\n}\r\n\r\n.justificativaReqAtd {\r\n    width: 800px;\r\n}\r\n\r\n.divItemAtd {\r\n    align-items: center;\r\n}\r\n\r\n.codReqAtd {\r\n    width: 40px;\r\n}\r\n\r\n.itemReqAtd {\r\n    width: 250px;\r\n}\r\n\r\n.qtdReq {\r\n    width: 40px;\r\n}\r\n\r\n.qtdEstAtd{\r\n    width: 40px;\r\n}\r\n.umReqAtd {\r\n    width: 40px;\r\n}\r\n\r\n.qtdReqAtd {\r\n    width: 40px;\r\n}\r\n\r\n.labelLarge {\r\n    margin-left: 400px;\r\n}\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*ESTOQUE*/\r\n\r\n.infoEstoqueGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n}\r\n\r\n.grupoEst {\r\n    width: auto;\r\n    height: auto;\r\n    position: relative;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.tabelaEstoque {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 1000px;\r\n    height: 500px;\r\n    text-align: center;\r\n    justify-items: center;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n\r\ndiv#tituloEstoque {\r\n    font-size: 18pt;\r\n    color: white;\r\n    background-color: #20B2AA;\r\n    border-radius: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.cabecalhoEstoque {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px 0 10px 0;\r\n    border-bottom: solid 1px #20B2AA;\r\n    justify-content: normal;\r\n}\r\n\r\n.cabecalhoEstoque div {\r\n    width: 250px;\r\n    font-size: 15pt;\r\n}\r\n\r\n.tableEstoque {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.infoEstoque {\r\n    display: block;\r\n    overflow: auto;\r\n    font-size: 13pt;\r\n    height: 350px;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.infoEstoque td {\r\n    width: 250px;\r\n    border-bottom: solid 1px #20B2AA;\r\n}\r\n\r\n\r\n\r\n/*////////////////////////////////////////////////////////////////////////////*/\r\n/*Permissões*/\r\n\r\n.infoPermissaoGeral {\r\n    position: relative;\r\n    top: 0;\r\n    left: 200px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 10px 0 0 50px;\r\n\r\n}\r\n\r\n.grupoPermissao {\r\n    width: fit-content;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n.formUser {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    justify-content: center;\r\n}\r\n\r\n.formDadosUser {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.formDadosUser input {\r\n    width: 200px;\r\n    height: 19px;\r\n    padding: 0;\r\n    text-align: center;\r\n    border-width: 0px;\r\n    border-bottom: solid 1px #ccc;\r\n}\r\n\r\n.formDadosUser select {\r\n    width: 200px;\r\n    height: 20px;\r\n    text-align: center;\r\n    border-width: 0px;\r\n    border-bottom: solid 1px #ccc;\r\n}\r\n\r\n.dadosAdmin {\r\n    width: 100%;\r\n    margin-top: 40px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.dadosAdmin input {\r\n    border: none;\r\n    border-bottom: solid 1px #ccc;\r\n    margin-right: 10px;\r\n}\r\n\r\n.userPermissao {\r\n    display: flex;\r\n    padding: 5px 0;\r\n}\r\n\r\n.cabecalhotableUser {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.cabecalhotableUser div {\r\n    width: 200px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.btnPermissao {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: #20B2AA;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.btnPermissao:hover {\r\n    background: #2ec0b9;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./public/assets/css/style.css":
/*!*************************************!*\
  !*** ./public/assets/css/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./public/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./front_end/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/assets/css/style.css */ "./public/assets/css/style.css");
/* harmony import */ var _src_helpers_cep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/helpers/cep */ "./src/helpers/cep.js");
/* harmony import */ var _src_helpers_cep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_helpers_cep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_helpers_organizaCpf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/helpers/organizaCpf */ "./src/helpers/organizaCpf.js");
/* harmony import */ var _src_helpers_organizaCpf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_helpers_organizaCpf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_helpers_submit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/helpers/submit */ "./src/helpers/submit.js");
/* harmony import */ var _src_helpers_submit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_helpers_submit__WEBPACK_IMPORTED_MODULE_3__);
 //import 'regenerator-runtime/runtime';
//import 'core-js/stable'
//import '../src/helpers/relogio';
//import '../src/helpers/localizacao';




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map