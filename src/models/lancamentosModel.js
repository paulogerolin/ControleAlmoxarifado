const mongoose = require('mongoose');

const lancamentoSchema = new mongoose.Schema({
    insertByMatricula: { type: String, required: true },
    insertByName: { type: String, required: true },
    nfe: { type: String, required: true },
    anoNfe: { type: String, required: true },
    cod: { type: String, required: true },
    produto: { type: String, required: true },
    qtd: { type: String, required: true },
    unidade: { type: String, required: true },
    valor: { type: String, required: true },
    fornecedor: { type: String, required: true },
    cnpj: { type: String, required: true },
    insertIn: { type: String, default: new Date() }
});

const lancamentoModel = mongoose.model('Lançamento', lancamentoSchema);

class Lancamento {
    //LANÇAMENTO DE NFS/////////////
    constructor(body) {
        this.body = body;
        this.lanErrors = [];
    }

    async register() {
        this.item = {
            insertByMatricula: this.body.matriculaReq,
            insertByName: this.body.nameReq,
            nfe: this.body.nfe,
            anoNfe: this.body.anoNfe,
            fornecedor: this.body.addFornecedor,
            cnpj: this.body.addCnpj
        }
        await this.checkHeader();

        if (typeof (this.body.item) == 'string') {
            var num = 0;
        } else {
            var num = this.body.item.length;
        }

        if (num > 1) {
            for (var cont = 0; cont < num; cont++) {
                this.item = {
                    insertByMatricula: this.body.matriculaReq,
                    insertByName: this.body.nameReq,
                    nfe: this.body.nfe,
                    anoNfe: this.body.anoNfe,
                    fornecedor: this.body.addFornecedor,
                    cnpj: this.body.addCnpj,
                    cod: this.body.addCodigo[cont],
                    produto: this.body.addProduto[cont],
                    qtd: this.body.addQtd[cont],
                    unidade: this.body.addUm[cont],
                    valor: this.body.addValor[cont]
                }

                this.checkBody();
                if (this.lanErrors.length > 0) return;
                try {
                    this.db = await lancamentoModel.create(this.item);
                } catch (err) {
                    console.log(err);
                };
            }
        } else {
            this.item = {
                insertByMatricula: this.body.matriculaReq,
                insertByName: this.body.nameReq,
                nfe: this.body.nfe,
                anoNfe: this.body.anoNfe,
                fornecedor: this.body.addFornecedor,
                cnpj: this.body.addCnpj,
                cod: this.body.addCodigo,
                produto: this.body.addProduto,
                qtd: this.body.addQtd,
                unidade: this.body.addUm,
                valor: this.body.addValor
            }
            this.checkBody();
            if (this.lanErrors.length > 0) return;
            try {
                this.db = await lancamentoModel.create(this.item);
            } catch (err) {
                console.log(err);
            };
        }
    }

    async checkHeader() {
        //VALIDA NFE////////API SEFAZ OU SERPRO////////
        if (!this.item.cnpj) return this.lanErrors.push('Informe o CNPJ do forncecedor!');
        this.validaCnpj();
        if (!this.item.nfe) return this.lanErrors.push('Informe o número da NF!');
        if (!this.item.anoNfe) return this.lanErrors.push('Informe o ano da NF!');
        await this.verificaNfe();
        if (this.isLancada == true) return this.lanErrors.push('Nota Fiscal já lançada!');
    }

    checkBody() {
        if (!this.item.produto) this.lanErrors.push('Informe o produto para o cadastro!');
        if (!this.item.qtd) this.lanErrors.push('Informe a quantidade do produto!');
        if (!this.item.valor || this.item.valor == ',') this.lanErrors.push('Informe o valor do produto!');
        if (!this.item.fornecedor) this.lanErrors.push('Informe o nome do forncecedor!');
    }


    validaCnpj() {
        var arrayCnpj = [];
        for (var i = 0; i < this.item.cnpj.length; i++) {
            var letra = this.item.cnpj.slice(i, i + 1);
            arrayCnpj.push(letra);
        };

        var primeiro = arrayCnpj[0] * 5
        var segundo = arrayCnpj[1] * 4
        var terceiro = arrayCnpj[2] * 3
        var quarto = arrayCnpj[3] * 2
        var quinto = arrayCnpj[4] * 9
        var sexto = arrayCnpj[5] * 8
        var setimo = arrayCnpj[6] * 7
        var oitavo = arrayCnpj[7] * 6
        var nono = arrayCnpj[8] * 5
        var decimo = arrayCnpj[9] * 4
        var eleven = arrayCnpj[10] * 3
        var twelve = arrayCnpj[11] * 2

        var soma = primeiro + segundo + terceiro + quarto + quinto + sexto + setimo + oitavo + nono + decimo + eleven + twelve;

        var firstDig = soma % 11;
        if (firstDig < 2) {
            firstDig = 0;
        } else {
            firstDig = 11 - firstDig;
        };

        var primeiro2 = arrayCnpj[0] * 6
        var segundo2 = arrayCnpj[1] * 5
        var terceiro2 = arrayCnpj[2] * 4
        var quarto2 = arrayCnpj[3] * 3
        var quinto2 = arrayCnpj[4] * 2
        var sexto2 = arrayCnpj[5] * 9
        var setimo2 = arrayCnpj[6] * 8
        var oitavo2 = arrayCnpj[7] * 7
        var nono2 = arrayCnpj[8] * 6
        var decimo2 = arrayCnpj[9] * 5
        var eleven2 = arrayCnpj[10] * 4
        var twelve2 = arrayCnpj[11] * 3
        var thirteen = arrayCnpj[12] * 2

        var somaSec = primeiro2 + segundo2 + terceiro2 + quarto2 + quinto2 + sexto2 + setimo2 + oitavo2 + nono2 + decimo2 + eleven2 + twelve2 + thirteen

        var secondDig = somaSec % 11
        if (secondDig < 2) {
            secondDig = 0;
        } else {
            secondDig = 11 - secondDig;
        }
        var verifica = `${firstDig}${secondDig}`

        var cutOrifinal = this.item.cnpj.slice(-2);

        if (verifica != cutOrifinal) return this.lanErrors.push('Informe um CNPJ válido!')
    };

    async search() {
        this.lista = await lancamentoModel.find();
    };

    async verificaNfe() {
        this.chkNfe = await lancamentoModel.find({ cnpj: this.item.cnpj, anoNfe:this.item.anoNfe });
        for (var i of this.chkNfe) {
            if (i.nfe == this.item.nfe) return this.isLancada = true;
        }
    };

}

module.exports = Lancamento;
