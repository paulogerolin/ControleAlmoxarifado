const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    matricula: { type: Number, required: true },
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    diaNascimento: { type: String, required: true },
    mesNascimento: { type: String, required: true },
    anoNascimento: { type: String, required: true },
    cep: { type: String, required: true },
    endereco: { type: String, required: true },
    num: { type: String, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    uf: { type: String, required: true },
    isRequisitante: { type: Boolean, default: true, required: true },
    isAlmox: { type: Boolean, default: false, required: true },
    isPat: { type: Boolean, default: false, required: true },
    isAdmAlmox: { type: Boolean, default: false, required: true },
    isAdmPat: { type: Boolean, default: false, required: true },
    superPowers: { type: Boolean, default: false, required: true }
});

const usersModel = mongoose.model('users', userSchema)

class User {
    //CRIAÇÃO E VALIDAÇÃO DO USUÁRIO///////////////////////////////////
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        await this.userExist();
        if (this.errors.length > 0) return;
        await this.check();
        if (this.errors.length > 0) return;
        this.body.senha = await bcrypt.hash(this.body.senha, 10);
        try {
            this.user = await usersModel.create(this.body);
        } catch (e) {
            console.log(e);
        }
    }

    async check() {
        await this.cleanup();
        //NOME//////////////////////////
        if ((this.body.nome == '') || (this.body.nome == ' ')) {
            this.errors.push('Informe o seu nome.');
        }

        //CPF//////////////////////////
        if ((this.body.cpf == '') || (this.body.cpf == ' ')) {
            this.errors.push('Informe o seu CPF.');
        }

        this.validaCpf()

        //EMAIL//////////////////////////
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('Email inválido!');
        }

        //SENHA/////////////////////////
        if (this.body.senha.length < 6) this.errors.push('Seu senha deverá ter pelo menos 6(seis) dígitos.');
        this.validaSenhaSimb();
        this.validaSenhaNum();

        if (this.body.senha !== this.body.chksenha) this.errors.push('Confirme sua senha corretamente.');

        if ((this.body.num == '') || (this.body.num == ' ')) this.errors.push('Informe o número do seu endereço.')

        //CEP///////////////////////////
        if (this.body.endereco == '') this.errors.push('Informe um CEP válido.');
    }

    async cleanup() {
        for (var item in this.body) {
            if (typeof this.body[item] != 'string') {
                this.body[item] = '';
            }
        }
        var numMatricula = await this.matricula();

        this.body = {
            nome: this.body.nomeCad,
            senha: this.body.senhaCad,
            cpf: this.body.cpfCad,
            email: this.body.emailCad,
            diaNascimento: this.body.diaCad,
            mesNascimento: this.body.mesCad,
            anoNascimento: this.body.anoCad,
            cep: this.body.cepCad,
            endereco: this.body.enderecoCad,
            num: this.body.numCad,
            bairro: this.body.bairroCad,
            cidade: this.body.cidadeCad,
            uf: this.body.ufCad,
            chksenha: this.body.chksenhaCad,
            matricula: numMatricula
        }
    }

    validaCpf() {
        if (this.body.cpf < 13) return this.errors.push('CPF inválido.');
        var arrayCpf = [];
        for (var i = 0; i <= 13; i++) {
            var nCpf = this.body.cpf.slice(i, i + 1);
            arrayCpf.push(nCpf);
        }

        var digCpf = arrayCpf[12];
        var digCpf2 = arrayCpf[13];
        var primeiro = arrayCpf[0] * 10;
        var segundo = arrayCpf[1] * 9;
        var terceiro = arrayCpf[2] * 8;
        var quarto = arrayCpf[4] * 7;
        var quinto = arrayCpf[5] * 6;
        var sexto = arrayCpf[6] * 5;
        var setimo = arrayCpf[8] * 4;
        var oitavo = arrayCpf[9] * 3;
        var nono = arrayCpf[10] * 2;

        var digPrim = ((primeiro + segundo + terceiro + quarto + quinto + sexto + setimo + oitavo + nono) * 10) % 11
        if (digPrim == 10) digPrim = 0;
        if (digCpf != digPrim) return this.errors.push('CPF inválido.');

        var primeiro2 = arrayCpf[0] * 11;
        var segundo2 = arrayCpf[1] * 10;
        var terceiro2 = arrayCpf[2] * 9;
        var quarto2 = arrayCpf[4] * 8;
        var quinto2 = arrayCpf[5] * 7;
        var sexto2 = arrayCpf[6] * 6;
        var setimo2 = arrayCpf[8] * 5;
        var oitavo2 = arrayCpf[9] * 4;
        var nono2 = arrayCpf[10] * 3;
        var decimo2 = arrayCpf[12] * 2;

        var digSec = ((primeiro2 + segundo2 + terceiro2 + quarto2 + quinto2 + sexto2 + setimo2 + oitavo2 + nono2 + decimo2) * 10) % 11
        if (digSec == 10) digSec = 0;
        if (digCpf2 != digSec) return this.errors.push('CPF inválido.');
    }

    validaSenhaSimb() {
        var arraySenha = [];
        for (var i = 0; i < this.body.senha.length; i++) {
            var nSenha = this.body.senha.slice(i, i + 1);
            arraySenha.push(nSenha);
        }
        for (var item of arraySenha) {
            if ((item == '!') || (item == '@') || (item == '#') || (item == '$') || (item == '%') || (item == '&') || (item == '*') || (item == '(') || (item == ')') || (item == '{') || (item == '}') || (item == '[') || (item == ']') || (item == '-') || (item == '_')) {
                return;
            }
        }
        return this.errors.push('Sua senha deverá conter pelo menos 1(um) símbolo (!@#$%&*(){}{}-_).')
    }


    validaSenhaNum() {
        var arraySenha = [];
        for (var i = 0; i < this.body.senha.length; i++) {
            var nSenha = this.body.senha.slice(i, i + 1);
            arraySenha.push(nSenha);
        }

        for (var item of arraySenha) {
            if ((item == '0') || (item == '1') || (item == '2') || (item == '3') || (item == '4') || (item == '5') || (item == '6') || (item == '7') || (item == '8') || (item == '9')) {
                return;
            }
        }
        return this.errors.push('Sua senha deverá conter pelo menos 1(um) número.');
    }

    async userExist() {
        var user = await usersModel.findOne({ email: this.body.emailCad })
        if (user) return this.errors.push('Email já cadastrado!')
    }

    //LOGIN//////////////////////////////////////
    async login() {
        var user = await usersModel.findOne({ email: this.body.emailLog })
        if (user === null) {
            this.errors.push('Usuário ou senha inválidos.');
            return
        } else {
            var match = await bcrypt.compare(this.body.senhaLog, user.senha);
            if (match === true) {
                this.user = user;
            } else {
                this.errors.push('Usuário ou senha inválidos.')
                this.user = null
            }
        }
    }

    async matricula() {
        var listaUser = await usersModel.find({})
        if (listaUser.length == 0) {
            return 1;
        } else {
            for (var i of listaUser) {
                var matricula = 0;
                while (matricula <= parseInt(i.matricula)) matricula++;
            }
            return matricula;
        }
    }

    async lista() {
        return await usersModel.find({})
    }

    async verifyPassword() {
        var user = await usersModel.findOne({ email: this.body.emailAdmin })
        var match = await bcrypt.compare(this.body.senhaAdmin, user.senha);

        if (match === false) {
            this.errors.push('Senha inválida.')
        }

    }

    async changePermissoes() {
        for (var num in this.body.emailUser) {
            await usersModel.findOneAndUpdate({ matricula: this.body.matriculaUser[num], email: this.body.emailUser[num] }, { isRequisitante: this.body.isRequisitante[num], isAlmox: this.body.isAlmox[num], isAdmAlmox: this.body.isAdmAlmox[num] })
        }
    }

}


module.exports = User;
