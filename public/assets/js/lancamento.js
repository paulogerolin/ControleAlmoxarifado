//CARREGA LISTA////////////////////////////////////////////////
window.onload = getLista();

async function getLista() {
    const url = location.href;
    var split = [];
    split = url.split('/');
    const id = split[4];
    var res = await fetch(`/item/${id}/listaItens`);
    var data = await res.json();
    var cod = null;
    localStorage.setItem('listaLan', JSON.stringify(data))
    begin(cod, data);
}

//INICIA////////////////////////////////////////////////////////

function begin(cod, data) {
    var listaStorage = localStorage.getItem('listaLan');
    var data = JSON.parse(listaStorage);
    var table = document.querySelector('.infoLancamento');
    var tr = table.firstChild;
    if (!tr) {
        reload(data);
        montaTabelaLancamento(data);
    }
    itemList(cod, data);
}



//MONTA TABELA/////////////////////////////////////////////////

function montaTabelaLancamento(db) {
    var tbodyLancamento = document.querySelector('.infoLancamento');
    for (var i of db) {
        var tr = '<tr>' +
            '<td>' + i.id + '</td>' +
            '<td>' + i.nome + '</td>' +
            '<td>' + `<input type="button" class="btnTabela" value="->" id="${i.id}" onclick=begin("${i.id}")>` + '</td>'
        '</tr>'

        tbodyLancamento.innerHTML += tr
    }
}

//ADICIONA SELEÇÃO DO ITEM PARA LANÇAMENTO///////////////////////////

function itemList(id, db) {
    const divDados = document.querySelector('.dadosAdd');
    const last = divDados.lastElementChild;
    const lastClass = last.className;
    const max = lastClass.slice(-1);

    for (var item = 0; item < max; item++) {

        var arProduto = document.querySelectorAll('#addProduto');
        var produto = arProduto[item];

        var arCod = document.querySelectorAll('#addCodigo');
        var codigo = arCod[item];

        var arUm = document.querySelectorAll('#addUm');
        var um = arUm[item];

        if (produto.value == '') {
            var produtoStore = localStorage.getItem(`produto${item}`);
            var codStore = localStorage.getItem(`codigo${item}`);
            var umStore = localStorage.getItem(`um${item}`)
            if (produtoStore) {
                produto.value = produtoStore;
                codigo.value = codStore;
                um.value = umStore;
            } else {
                for (var n of db) {
                    if (n.id == id) {
                        var nome = n.nome;
                        var unidade = n.unidade;
                    }
                }
                if (id == undefined) {
                    id = '';
                    nome = '';
                    unidade = '';
                }
                produto.value = nome;
                localStorage.setItem(`produto${item}`, nome);
                codigo.value = id;
                localStorage.setItem(`codigo${item}`, id);
                um.value = unidade;
                localStorage.setItem(`um${item}`, unidade);
                item = 9999;
            }
        }
    }
}

//ADICIONA NOVO ITEM PARA LANÇAMENTO//////////////////////////

const btnAdd = document.querySelector('.btnAddItem');
btnAdd.addEventListener('click', adicionaItem)

function adicionaItem() {
    const divDados = document.querySelector('.dadosAdd');
    var arrayCN = [...divDados.childNodes];
    var n = 1;
    for (var item of arrayCN) {
        if (item.nodeName === 'DIV') {

            var cls = item.className;
            var isItem = cls.slice(0, 4)
            if (isItem == 'item') {
                var id = cls.slice(-1)
                while (n <= id) n = n + 1
            }
        }
    };

    var newItem =
        `<div class="spaceItens"></div>
            <div class="item${n}">
                <label for="item">Item: </label>
                <input type="text" value="${n}" name="item" id="itemLan" readonly>  
            </div>
            <div class="item${n}">
                <label for="addCodigo">Código: </label>
                <input type="text" name="addCodigo" id="addCodigo" readonly>
                <label for="addProduto">Produto: </label>
                <input type="text" name="addProduto" id="addProduto" readonly placeholder="SELECIONE PELA LISTA DE ITENS"S>
                <label for="addUm">Unidade de medida: </label>
                <input type="text" name="addUm" id="addUm" readonly>
                <label for="addQtd">Quantidade: </label>
                <input type="text" name="addQtd" id="addQtd" oninput="this.value = this.value.replace(/[^0-9.]/g, '');" onkeyup="localStorage.setItem('qtd${n - 1}', this.value)">
                <label for="addValor">Valor: </label>
                <input type="text" name="addValor" id="addValor" oninput="this.value = this.value.replace(/[^0-9.]/g, '');" placeholder="0,00" onkeyup="comma(this.value, ${n - 1}), localStorage.setItem('valor${n - 1}', this.value)">
            </div>
        </div>`;
    divDados.insertAdjacentHTML('beforeend', newItem);
    localStorage.setItem('indice', n)
};


//REMOVE ITEM DO LANÇAMENTO////////////////////////////////////////////

var btnRem = document.querySelector('.btnRmvItem');
btnRem.addEventListener('click', removeItem);

function removeItem() {
    const divDados = document.querySelector('.dadosAdd');
    var last = divDados.lastElementChild;
    const lastClass = last.className;
    const max = lastClass.slice(-1);
    if (max > 1) {
        var lastItem = document.querySelectorAll(`.${lastClass}`);
        for (var i of lastItem) {
            i.parentNode.removeChild(i);
        }
        last = divDados.lastElementChild;
        last.parentNode.removeChild(last);
    };
    var n = localStorage.getItem('indice')
    if (n > 1) n = n - 1;
    localStorage.setItem('indice', n)
};

//LIMPA DADOS DE LANÇAMENTOS/////////////////////////////////////////////
var btnClear = document.querySelector('.btnClear');
btnClear.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})

//SALVA ITEM PARA RELOAD/////////////////////////////////////////////////

var nfe = document.querySelector('#nfe');
nfe.addEventListener('keyup', () => {
    localStorage.setItem(`nfe`, nfe.value);
});

var fornecedor = document.querySelector('#addFornecedor');
fornecedor.addEventListener('keyup', () => {
    localStorage.setItem(`fornecedor`, fornecedor.value);
});

var cnpj = document.querySelector('#addCnpj');
cnpj.addEventListener('keyup', () => {
    localStorage.setItem(`cnpj`, cnpj.value);
});

//ONRELOAD///////////////////////////////////////////////////////////////

function reload(db) {
    const form = document.querySelector('.adiciona');
    const msg = form.firstElementChild;
    const classMsg = msg.className;

    const dados = document.querySelector('.dadosAdd');
    const buttons = document.querySelector('#button');
    const pdf = document.querySelector('.insertPDF');
    const hideBtn = document.querySelector('.hide');

    if (classMsg == 'erros') {
        //NFE
        var nfeStore = localStorage.getItem('nfe')
        var nfe = document.querySelector('#nfe');
        nfe.value = nfeStore;
        //FORNECEDOR
        var fornecedorStore = localStorage.getItem('fornecedor')
        var fornecedor = document.querySelector('#addFornecedor');
        fornecedor.value = fornecedorStore;
        //CNPJ
        var cnpjStore = localStorage.getItem('cnpj')
        var cnpj = document.querySelector('#addCnpj');
        cnpj.value = cnpjStore;

        //Códigos, Produtos, Quantidade, Valor e UM

        var indice = localStorage.getItem('indice');
        var nItens = indice - 1;
        for (var i = 0; i < indice; i++) {
            if (i < nItens) {
                adicionaItem();
            }
            var cod = localStorage.getItem(`codigo${i}`);
            itemList(cod, db);
        }
        var arrayQtd = document.querySelectorAll('#addQtd');
        for (var inQtd in arrayQtd) {
            var qtdStore = localStorage.getItem(`qtd${inQtd}`)
            arrayQtd[inQtd].value = qtdStore;
        }
        var arrayValor = document.querySelectorAll('#addValor');
        for (var inValor in arrayValor) {
            var valorStore = localStorage.getItem(`valor${inValor}`)
            arrayValor[inValor].value = valorStore;
        }
    }
    if (classMsg == 'sucess') {
        localStorage.clear();
        dados.style.display = 'none';
        buttons.style.display = 'none';
        pdf.style.display = 'none';
        hideBtn.style.display = 'flex';
    }
}


//BUSCA

function searchLancamento(search) {
    var listaStorage = localStorage.getItem('listaLan')
    var dataObj = JSON.parse(listaStorage)

    var tbodyLancamento = document.querySelector('.infoLancamento');
    var cut = search.length;
    var opcao = document.getElementById('selectLancamento').value


    if (search == '') {
        for (i in dataObj) {
            var tr = tbodyLancamento.childNodes[i]
            tr.style.display = 'table-row'
        }
    }

    for (i in dataObj) {
        var tr = tbodyLancamento.childNodes[i]
        var td = tr.childNodes[opcao].textContent
        var tdCut = td.slice(0, cut);
        tdCut = tdCut.toLowerCase();

        if (tdCut !== search) {
            tr.style.display = 'none'
        }
    }
}

function comma(valor, n) {
    var beforeComma = valor.slice(0, (valor.length - 2))
    var afterComma = valor.slice(-2)
    var item = document.querySelectorAll('#addValor')
    item[n].value = `${beforeComma},${afterComma}`
}