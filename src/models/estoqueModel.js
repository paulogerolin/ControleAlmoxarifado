const mongoose = require('mongoose');

const estoqueSchema = new mongoose.Schema({
    cod: { type: String, required: true },
    produto: { type: String, required: true },
    qtd: { type: String, required: true },
    unidade: { type: String, required: true }
})

const estoqueModel = mongoose.model('Estoque', estoqueSchema);

class Estoque {
    constructor(itens, lancamento, reqAtendidas) {
        this.itens = itens;
        this.lancamento = lancamento;
        this.reqAtendidas = reqAtendidas;
    }

    async register() {
        this.organiza = [];
        for (var item of this.itens) {
            this.qtd = 0;
            if (this.lancamento.length > 0) {
                for (var lan of this.lancamento) {
                    if (item.id == lan.cod) {
                        this.qtd = parseInt(this.qtd) + parseInt(lan.qtd);
                    }
                }
            }
            if (this.reqAtendidas.length > 0) {
                for (var reqAtd of this.reqAtendidas) {
                    if (item.id == reqAtd.cod) {
                        this.qtd = parseInt(this.qtd) - parseInt(reqAtd.qtdAtd);
                    }
                }
            }
            this.estoque = {
                cod: item.id,
                produto: item.nome,
                qtd: this.qtd,
                unidade: item.unidade
            }
            this.organiza.push(this.estoque);
        }

        try {
            for (var i of this.organiza) {
                this.search = await estoqueModel.find({ cod: i.cod })
                if (this.search.length == 1) {
                    this.db = await estoqueModel.findOneAndUpdate({ cod: i.cod }, { qtd: i.qtd })
                } else {
                    this.db = await estoqueModel.create(i);
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    async data() {
        this.info = this.info = await estoqueModel.find({});
    }
}

module.exports = Estoque;