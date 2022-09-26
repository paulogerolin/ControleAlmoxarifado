var nome = document.getElementById('nomeCad');
if (nome) {
    nome.addEventListener('keyup', () => {
        localStorage.setItem('nome', nomeCad.value);
    });
}

var cpf = document.getElementById('cpfCad');
if (cpf) {
    cpf.addEventListener('keyup', () => {
        localStorage.setItem('cpf', cpf.value);
    });
}

var email = document.getElementById('emailCad');
if (email) {
    email.addEventListener('keyup', () => {
        localStorage.setItem('email', email.value);
    });
};

var senha = document.getElementById('senhaCad');
if (senha) {
    senha.addEventListener('keyup', () => {
        localStorage.setItem('senha', senha.value);
    });
};

var chksenha = document.getElementById('chksenhaCad');
if (chksenha) {
    chksenha.addEventListener('keyup', () => {
        localStorage.setItem('chksenha', chksenha.value);
    });
};

var dia = document.getElementById('diaCad');
if (dia) {
    dia.addEventListener('keyup', () => {
        localStorage.setItem('dia', dia.value);
    });
};

var mes = document.getElementById('mesCad');
if (mes) {
    mes.addEventListener('keyup', () => {
        localStorage.setItem('mes', mes.value);
    });
};

var ano = document.getElementById('anoCad');
if (ano) {
    ano.addEventListener('keyup', () => {
        localStorage.setItem('ano', ano.value);
    });
};

var cep = document.getElementById('cepCad');
if (cep) {
    cep.addEventListener('keyup', () => {
        localStorage.setItem('cep', cep.value);
    });
};

var num = document.getElementById('numCad');
if (num) {
    num.addEventListener('keyup', () => {
        localStorage.setItem('num', num.value);
    });
};


window.onload = () => {

    if (localStorage.nome == undefined) {
        localStorage.nome = '';
    } else {
        var nome = localStorage.nome
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

}
