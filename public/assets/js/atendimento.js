//CARREGA LISTA////////////////////////////////////////////////
window.onload = getLista();

async function getLista() {
    const url = location.href;
    var split = [];
    split = url.split('/');
    const id = split[4];
    var res = await fetch(`/requisicao/${id}/listaRequisicoes`);
    var data = await res.json();
    var resEstoque = await fetch(`/estoque/${id}/data`);
    var dataEstoque = await resEstoque.json();
    var numReq = null;
    localStorage.setItem('listaRequisicoes', JSON.stringify(data));
    localStorage.setItem('listaEstoque', JSON.stringify(dataEstoque))
    begin(numReq, data);
}

//INICIA///////////////////////////////////////////////////////

function begin(numReq, data) {
    var listaStorage = localStorage.getItem('listaRequisicoes');
    var data = JSON.parse(listaStorage);
    var table = document.querySelector('.infoAtd');
    var tr = table.firstChild;
    if (!tr) {
        montaTabelaReq(data);
        reload();
    }
    itemList(numReq);
}

//MONTA TABELA/////////////////////////////////////////////////

function montaTabelaReq(db) {
    const tbodyReq = document.querySelector('.infoAtd');
    let rpt = null;
    if (db.length > 0) {
        for (var i of db) {
            if (rpt != i.numReq) {
                var [firstName] = i.insertByName.split(' ');
                var [diaSemana, mes, dia, ano, horas] = i.insertIn.split(' ')
                const num = new NumMes(mes);
                var tr = `<tr>
                    <td>${i.numReq}</td>
                    <td>${i.status}</td>
                    <td>${dia}/${num.numMes}/${ano}</td>
                    <td>${i.insertByMatricula} - ${firstName}</td>
                    <td><input type="button" class="btnTabela" value="->" id="${i.numReq}" onclick=begin("${i.numReq}")></td>`
                '</tr>';

                tbodyReq.innerHTML += tr;
            }
            rpt = i.numReq;
        }

    } else {
        tbodyReq.innerHTML = `<tr>Não há requisições em aberto!</tr>`
    }
}

class NumMes {
    constructor(mes) {
        if (mes == 'Jan')
            this.numMes = '01';
        if (mes == 'Feb')
            this.numMes = '02';
        if (mes == 'Man')
            this.numMes = '03';
        if (mes == 'Apr')
            this.numMes = '04';
        if (mes == 'May')
            this.numMes = '05';
        if (mes == 'Jun')
            this.numMes = '06';
        if (mes == 'Jul')
            this.numMes = '07';
        if (mes == 'Aug')
            this.numMes = '08';
        if (mes == 'Sep')
            this.numMes = '09';
        if (mes == 'Oct')
            this.numMes = '10';
        if (mes == 'Nov')
            this.numMes = '11';
        if (mes == 'Dec')
            this.numMes = '12';
    }
}

function itemList(numReq) {
    var listaStorage = localStorage.getItem('listaRequisicoes');
    var data = JSON.parse(listaStorage);
    var estoqueStorage = localStorage.getItem('listaEstoque');
    var dataEstoque = JSON.parse(estoqueStorage);
    var divAtd = document.querySelector('.dadosReqAtd');


    if (numReq) {
        let border = document.querySelector('.atendimento');
        border.style.boxShadow = '0px 0px 15px 5px rgba(0,0,0,0.26)'

        var arrayReq = [];
        for (var i of data) {
            if (i.numReq == numReq) {
                arrayReq.push(i);
            }
        }
        var cabecalho =
            `<h3>Requição: ${arrayReq[0].numReq} </h3>
            <input type="hidden" name="numReqAtd" value="${arrayReq[0].numReq}">
            <div class="cabecalhoReqAtd">
                <label for="matriculaReqAtd">Matricula: </label>
                <input type="text" class="matriculaReqAtd" value="${arrayReq[0].insertByMatricula}" readonly name="matriculaReqAtd">
                <label for="nameReqAtd">Nome: </label>
                <input type="text" class="nameReqAtd" value="${arrayReq[0].insertByName}" readonly name="nameReqAtd">
            </div>
            <div class="cabecalhoReqAtd">
                <label for="justificativaReqAtd">Justificativa: </label>
                <input type="text" class="justificativaReqAtd" value="${arrayReq[0].justificativa}" readonly name="justificativaReqAtd">
            </div>`;


        divAtd.innerHTML = cabecalho
        for (var j of arrayReq) {
            for (var n of dataEstoque) {
                if (j.cod == n.cod) {
                    var corpo =
                        `<div class="spaceItens"></div>
                            <div class="divItemAtd">
                            <label for="codReqAtd">Código: </label>
                            <input type="text" class="codReqAtd" value="${j.cod}" readonly name="codReqAtd">
                            <label for="itemReq">Item: </label>
                            <input type="text" class="itemReqAtd" value="${j.produto}" readonly name="itemReqAtd">
                            <label for="umReqAtd">Unidade de medida: </label>
                            <input type="text" class="umReqAtd" value="${j.unidade}" readonly name="umReqAtd">
                            <label for="qtdReq">Quantidade Requisitada: </label>
                            <input type="text" class="qtdReq" value="${j.qtd}" readonly name="qtdReq">
                        </div>
                        <div class="divItemAtd">
                            <label for="qtdEstAtd" class="labelLarge">Quantidade em Estoque: </label>
                            <input type="text" class="qtdEstAtd" value="${n.qtd}" readonly name="qtdEstAtd">
                            <label for="qtdReqAtd">Quantidade Atendidada: </label>
                            <input type="text" class="qtdReqAtd" value="${j.qtd}" name="qtdReqAtd">
                        </div>`;

                    divAtd.innerHTML += corpo
                }
            }
        }

        var button = `<div id="button">
                        <input type="submit" value="Atender" class="btnLanca">
                    </div>`;

        divAtd.innerHTML += button;
        localStorage.setItem('numReq', numReq);
    }
}
function reload() {
    const form = document.querySelector('.atendimento');
    const msg = form.firstElementChild;
    const classMsg = msg.className;
    if (classMsg == 'erros') {
        const numReq = localStorage.getItem('numReq');
        if (numReq) itemList(numReq);
    }
    if (classMsg == 'sucess') {
        localStorage.clear();
        const divAtd = document.querySelector('.atendimento');
        const reload = `<h3>Requisição</h3>`;
        divAtd.insertAdjacentHTML('afterbegin', reload);
        const hide = document.querySelector('.hide');
        hide.style.display = 'flex'
    }
}

function searchAtd(search) {
    var listaStorage = localStorage.getItem('listaRequisicoes')
    var dataObj = JSON.parse(listaStorage)

    var tbodyAtd = document.querySelector('.infoAtd');
    var cut = search.length;
    var opcao = document.getElementById('selectAtd').value
    
    var novoSearch = [];

    for(var i of dataObj){
        novoSearch.push(i.numReq)
    }
    
    const filterArray = novoSearch.filter((ele, pos) => {
        return novoSearch.indexOf(ele) == pos;
    })

    if (search == '') {
        for (var i in filterArray) {
            var tr = tbodyAtd.childNodes[i]
            tr.style.display = 'table-row'
        }
    }

    for (var i in filterArray) {
        var tr = tbodyAtd.childNodes[i]
        var td = tr.childNodes[opcao].textContent
        var tdCut = td.slice(0, cut);
        tdCut = tdCut.toLowerCase();

        if (tdCut !== search) {
            tr.style.display = 'none'
        }
    }
}