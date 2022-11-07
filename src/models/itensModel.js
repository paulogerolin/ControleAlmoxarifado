const mongoose = require('mongoose');

const itemSchmema = new mongoose.Schema({
    nome: { type: String, required: true },
    unidade: { type: String, required: true },
    id: { type: Number, required: true }
});

const itemModel = mongoose.model('Itens', itemSchmema);

class Item {
    constructor(body) {
        this.body = body;
        this.iErrors = [];
    }

    async register() {
        this.lista = await itemModel.find();

        for (var i of this.lista) {
            if (this.body.addItemIn == i.nome) return this.iErrors.push('Produto já cadastrado!')
        }

        if (!this.body.addItemIn) return this.iErrors.push('Informe o nome do novo item.')
        if (!this.body.addItemUm) return this.iErrors.push('Informe a unidade de medida.')
        const nome = this.body.addItemIn.toUpperCase();
        const unidade = this.body.addItemUm.toUpperCase();

        var max = 0;
        if (this.lista.length > 0) {
            for (var i of this.lista) {
                while (max <= i.id) max++;
            }
        }

        this.body = {
            nome: nome,
            unidade: unidade,
            id: max
        }

        if (this.iErrors.length > 0) return;

        try {
            this.db = await itemModel.create(this.body)
        } catch (e) {
            console.log(e);
        }
    }

    async search() {
        this.lista = await itemModel.find();
    }
}

module.exports = Item;
