const mongoose = require('mongoose');
const Requicao = require('../models/requisicaoModel')

const requisicaoAtdSchema = new mongoose.Schema({
    numReq: { type: String, required: true },
    insertByMatricula: { type: String, required: true },
    insertByName: { type: String, required: true },
    justificativa: { type: String, required: true },
    cod: { type: Number, required: true },
    produto: { type: String, required: true },
    qtd: { type: Number, required: true },
    qtdAtd: { type: Number, required: true },
    unidade: { type: String, required: true },
    insertIn: { type: String, default: new Date() }
});

const requisicaoAtdModel = mongoose.model('Requisições Atendidas', requisicaoAtdSchema);

class RequisicaoAtd {
    constructor(body) {
        this.body = body;
        this.reqAtdErrors = [];
    }
    async register() {
        let num;
        if (typeof(this.body.codReqAtd) == 'string'){
            num = 0;
        } else {
            num = this.body.codReqAtd.length;
        }

        if (num > 1) {
            for (var cont = 0; cont < num; cont++) {
                this.item = {
                    insertByMatricula: this.body.matriculaReqAtd,
                    insertByName: this.body.nameReqAtd,
                    justificativa: this.body.justificativaReqAtd,
                    cod: this.body.codReqAtd[cont],
                    produto: this.body.itemReqAtd[cont],
                    qtd: this.body.qtdReq[cont],
                    qtdAtd: this.body.qtdReqAtd[cont],
                    unidade: this.body.umReqAtd[cont],
                    numReq: this.body.numReqAtd
                }
                this.checkBody(cont);
                if (this.reqAtdErrors.length > 0) return;
                try {
                    let requisicao = new Requicao(this.item);
                    await requisicao.atendimento();
                    this.db = await requisicaoAtdModel.create(this.item);
                } catch (err) {
                    console.log(err);
                };
            }
        } else {
            this.item = {
                insertByMatricula: this.body.matriculaReqAtd,
                insertByName: this.body.nameReqAtd,
                justificativa: this.body.justificativaReqAtd,
                cod: this.body.codReqAtd,
                produto: this.body.itemReqAtd,
                qtd: this.body.qtdReq,
                qtdAtd: this.body.qtdReqAtd,
                unidade: this.body.umReqAtd,
                numReq: this.body.numReqAtd
            }
            this.checkBody();
            if (this.reqAtdErrors.length > 0) return;
            try {
                let requisicao = new Requicao(this.item);
                await requisicao.atendimento();
                this.db = await requisicaoAtdModel.create(this.item);
            } catch (err) {
                console.log(err);
            };
        }
    }

    checkBody(cont) {
        if (!this.item.qtdAtd) this.reqAtdErrors.push('Informe a quantidade do produto!');
        if (parseInt(this.item.qtdAtd) > parseInt(this.item.qtd)) this.reqAtdErrors.push(`Não é possível atender mais quantidade do que a quantidade pedida para o cód ${this.item.cod}!`);
        if (cont) {
            if (parseInt(this.body.qtdEstAtd[cont]) < parseInt(this.item.qtdAtd)) this.reqAtdErrors.push(`Não há saldo suficiente para atender o cód ${this.item.cod}!`);
        } else {
            if (parseInt(this.body.qtdEstAtd) < parseInt(this.item.qtdAtd)) this.reqAtdErrors.push(`Não há saldo suficiente para atender o cód ${this.item.cod}!`);
        }
    }


    async search() {
        this.lista = await requisicaoAtdModel.find({});
    };
}

module.exports = RequisicaoAtd;
