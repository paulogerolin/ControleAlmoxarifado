const mongoose = require('mongoose');

const requisicaoSchema = new mongoose.Schema({
    numReq: { type: String, required: true },
    insertByMatricula: { type: String, required: true },
    insertByName: { type: String, required: true },
    justificativa: { type: String, required: true },
    cod: { type: Number, required: true },
    produto: { type: String, required: true },
    qtd: { type: Number, required: true },
    unidade: { type: String, required: true },
    status: { type: String, required: true, default: 'Não atendida.' },
    insertIn: { type: String, default: new Date() }
});

const requisicaoModel = mongoose.model('Requisições', requisicaoSchema);

class Requisicao {
    constructor(body) {
        this.body = body;
        this.reqErrors = [];
    }
    async register() {
        await this.geraNumReq()
        let num;
        if (typeof(this.body.addCodigo) == 'string'){
            num = 0;
        } else {
            num = this.body.addCodigo.length;
        }
        if (num > 1) {
            for (var cont = 0; cont < num; cont++) {
                this.item = {
                    insertByMatricula: this.body.matriculaReq,
                    insertByName: this.body.nameReq,
                    justificativa: this.body.justificativaReq,
                    cod: this.body.addCodigo[cont],
                    produto: this.body.addProduto[cont],
                    qtd: this.body.addQtd[cont],
                    unidade: this.body.addUm[cont],
                    numReq: this.number,
                }
                this.checkBody();
                if (this.reqErrors.length > 0) return;
                try {
                    this.db = await requisicaoModel.create(this.item);
                } catch (err) {
                    console.log(err);
                };
            }
        } else {
            this.item = {
                insertByMatricula: this.body.matriculaReq,
                insertByName: this.body.nameReq,
                justificativa: this.body.justificativaReq,
                cod: this.body.addCodigo,
                produto: this.body.addProduto,
                qtd: this.body.addQtd,
                unidade: this.body.addUm,
                numReq: this.number
            }
            this.checkBody();
            if (this.reqErrors.length > 0) return;
            try {
                this.d = await requisicaoModel.create(this.item);
            } catch (err) {
                console.log(err);
            };
        }
    }

    checkBody() {
        if (!this.item.justificativa) this.reqErrors.push('Acrescente uma justificativa!')
        if (!this.item.produto) this.reqErrors.push('Informe o produto para o cadastro!');
        if (!this.item.qtd) this.reqErrors.push('Informe a quantidade do produto!');
    }


    async search() {
        this.lista = await requisicaoModel.find({});
    };

    async geraNumReq() {
        this.numReq = await requisicaoModel.find({});
        if (!this.numReq) {
            this.number = 1;
        } else {
            this.number = 1;
            for (var i of this.numReq) {
                while (this.number <= i.numReq) this.number++;
            }
        }
    }

    async atendimento() {
        this.reqDB = await requisicaoModel.findOne({numReq: this.body.numReq, cod:this.body.cod})
        if(!this.reqDB) return this.reqErrors.push('Requisição já atendida ou não encontrada.')
        if (parseInt(this.body.qtdAtd) < parseInt(this.reqDB.qtd)){
            var newQtd = parseInt(this.reqDB.qtd) - parseInt(this.body.qtdAtd)
            await requisicaoModel.findOneAndUpdate({numReq: this.body.numReq, cod:this.body.cod}, {qtd: newQtd, status:'Parcial'})
        } else if (parseInt(this.body.qtdAtd) == parseInt(this.reqDB.qtd)){
            await requisicaoModel.findOneAndDelete({numReq: this.body.numReq, cod:this.body.cod})
        }
    }
}

module.exports = Requisicao;
