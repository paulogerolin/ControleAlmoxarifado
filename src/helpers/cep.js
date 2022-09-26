//CEP
var cep = document.getElementById('cepCad');
if (cep) {
    cep.addEventListener('keyup', () => {
        if ((cep.value.length == 8) || (cep.value.length == 9)) {
            getCEP(cep.value);
        }
    })

    async function getCEP(numCep) {
        var txtEnd = document.getElementById('enderecoCad');
        var txtBairro = document.getElementById('bairroCad');
        var txtCid = document.getElementById('cidadeCad');
        var txtEst = document.getElementById('ufCad');
        var afterInfo = document.querySelector('.afterInfo')
        var divHidden = document.querySelector('.divHidden')
        var divHidden2 = document.querySelector('.divHidden2')
        var urlViaCep = `http://viacep.com.br/ws/${numCep}/json`;
        var fetchCep = await fetch(urlViaCep);
        var resCep = await fetchCep.json();
        if (resCep) {
            afterInfo.style.display = 'flex'
            afterInfo.style.flexDirection = 'column'
            divHidden.style.display = 'flex'
            divHidden.style.flexDirection = 'row'
            divHidden2.style.display = 'flex'
            divHidden2.style.flexDirection = 'row'
            txtEnd.value = resCep.logradouro;
            txtBairro.value = resCep.bairro;
            txtCid.value = resCep.localidade;
            txtEst.value = resCep.uf;

        }
        if (resCep.logradouro == undefined) {
            window.alert('CEP inválido')
            txtEnd.value = '';
            txtBairro.value = '';
            txtCid.value = '';
            txtEst.value = '';
        }
    }
}

/*
var imgCep = document.getElementById('imgCep')
imgCep.addEventListener('click', () => {
    var win = window.open('https://buscacepinter.correios.com.br/app/localidade_logradouro/index.php', '_blank')
    win.focus();
})
*/