//CARREGA LISTA////////////////////////////////////////////////
window.onload = getLista();

async function getLista() {
    const url = location.href;
    var split = [];
    split = url.split('/');
    const id = split[4];
    var res = await fetch(`/estoque/${id}/data`)
    var data = await res.json();
    localStorage.setItem('listaEstoque', JSON.stringify(data))
    montaTabelaEstoque(data);
}

//INICIA///////////////////////////////////////////////////////

function montaTabelaEstoque(db) {
    var tbodyEst = document.querySelector('.infoEstoque');
    for (var i of db) {
        var tr = `<tr>
        <td>${i.cod}</td>
        <td>${i.produto}</td>
        <td>${i.qtd}</td>
        <td>${i.unidade}</td>`
        '</tr>'

        tbodyEst.innerHTML += tr
    }
}

function searchEstoque(search) {
    var listaStorage = localStorage.getItem('listaEstoque')
    var dataObj = JSON.parse(listaStorage)

    var tbodyReq = document.querySelector('.infoEstoque');
    var cut = search.length;
    var opcao = document.getElementById('selectEstoque').value


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
