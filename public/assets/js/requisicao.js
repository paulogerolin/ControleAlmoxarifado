//CARREGA LISTA////////////////////////////////////////////////
window.onload = getLista();

async function getLista() {
    const url = location.href;
    var split = [];
    split = url.split('/');
    const id = split[4];
    var data = await fetch(`/item/${id}/listaItens`)
    var dataObj = await data.json();
    var cod = null;
    localStorage.setItem('listaReq', JSON.stringify(dataObj))
    begin(cod, dataObj);
}

//INICIA///////////////////////////////////////////////////////

function begin(cod, dataObj) {
    var listaStorage = localStorage.getItem('listaReq')
    var dataObj = JSON.parse(listaStorage)
    var table = document.querySelector('.infoReq')
    var tr = table.firstChild
    if (!tr) {
        montaTabelaReq(dataObj);
        reload(dataObj);
    }
    itemList(cod, dataObj);
}


//MONTA TABELA/////////////////////////////////////////////////

function montaTabelaReq(db) {
    var tbodyReq = document.querySelector('.infoReq');
        for (var i of db) {
            var tr = '<tr>' +
                '<td>' + i.id + '</td>' +
                '<td>' + i.nome + '</td>' +
                '<td>' + `<input type="button" class="btnTabela" value="->" id="${i.id}" onclick=begin("${i.id}")>` + '</td>'
            '</tr>'

            tbodyReq.innerHTML += tr
        }
}

//ADICIONA SELEÇÃO DO ITEM PARA LANÇAMENTO///////////////////////////

function itemList(id, db) {
    const divDados = document.querySelector('.dadosReq');
    const last = divDados.lastElementChild;
    const lastClass = last.className;
    const max = lastClass.slice(-1);

    for (var item = 0; item < max; item++) {

        var arProduto = document.querySelectorAll('#addProdutoReq');
        var produto = arProduto[item];

        var arCod = document.querySelectorAll('#addCodigoReq');
        var codigo = arCod[item];

        var arUm = document.querySelectorAll('#addUmReq');
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
    const divDados = document.querySelector('.dadosReq');
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
                <input type="text" value="${n}" name="item" id="itemReq" readonly>
                <label for="addCodigo">Código: </label>
                <input type="text" name="addCodigo" id="addCodigoReq" readonly>
                <label for="addProduto">Produto: </label>
                <input type="text" name="addProduto" id="addProdutoReq" readonly placeholder="SELECIONE PELA LISTA DE ITENS">
                <label for="addUm">Unidade de medida: </label>
                <input type="text" name="addUm" id="addUmReq" readonly>
                <label for="addQtd">Quantidade: </label>
                <input type="text" name="addQtd" id="addQtdReq" oninput="this.value = this.value.replace(/[^0-9.]/g, '');" onkeyup="localStorage.setItem('qtd${n - 1}', this.value)">
            </div>
        </div>`;
    divDados.insertAdjacentHTML('beforeend', newItem);
    localStorage.setItem('indice', n)
};


//REMOVE ITEM DO LANÇAMENTO////////////////////////////////////////////

var btnRem = document.querySelector('.btnRmvItem');
btnRem.addEventListener('click', removeItem);

function removeItem() {
    const divDados = document.querySelector('.dadosReq');
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


//ONRELOAD///////////////////////////////////////////////////////////////

function reload(db) {
    const form = document.querySelector('.adiciona');
    const msg = form.firstElementChild;
    const classMsg = msg.className;

    const dados = document.querySelector('.dadosReq')
    const buttons = document.querySelector('#button')
    const hideBtn = document.querySelector('.hide')

    if (classMsg == 'erros') {

        //Códigos, Produtos, Quantidade de Valor

        var indice = localStorage.getItem('indice');
        var nItens = indice - 1;
        for (var i = 0; i < indice; i++) {
            if (i < nItens) {
                adicionaItem();
            }
            var cod = localStorage.getItem(`codigo${i}`);
            itemList(cod, db);
        }
        var arrayQtd = document.querySelectorAll('#addQtdReq');
        for (var inQtd in arrayQtd) {
            var qtdStore = localStorage.getItem(`qtd${inQtd}`)
            arrayQtd[inQtd].value = qtdStore;
        }
        var arrayValor = document.querySelectorAll('#addValorReq');
        for (var inValor in arrayValor) {
            var valorStore = localStorage.getItem(`valor${inValor}`)
            arrayValor[inValor].value = valorStore;
        }
    }
    if (classMsg == 'sucess') {
        localStorage.clear();
        dados.style.display = 'none';
        buttons.style.display = 'none';
        hideBtn.style.display = 'flex';
    }
}


//BUSCA

function searchReq(search) {
    var listaStorage = localStorage.getItem('listaReq')
    var dataObj = JSON.parse(listaStorage)

    var tbodyReq = document.querySelector('.infoReq');
    var cut = search.length;
    var opcao = document.getElementById('selectReq').value


    if (search == '') {
        for (i in dataObj) {
            var tr = tbodyReq.childNodes[i]
            tr.style.display = 'table-row'
        }
    }

    for (i in dataObj) {
        var tr = tbodyReq.childNodes[i]
        var td = tr.childNodes[opcao].textContent
        var tdCut = td.slice(0, cut);
        tdCut = tdCut.toLowerCase();

        if (tdCut !== search) {
            tr.style.display = 'none'
        }
    }
}