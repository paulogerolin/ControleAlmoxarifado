//CARREGA LISTA////////////////////////////////////////////////
window.onload = getLista();

async function getLista() {
    const url = location.href;
    var split = [];
    split = url.split('/');
    const id = split[4];
    var resUser = await fetch(`/permissoes/${id}/listaUser`);
    var dataUser = await resUser.json();
    montaTabelaUser(dataUser)
}

function montaTabelaUser(dataUser) {
    var tbodyPer = document.querySelector('.formDadosUser');
    for (var i of dataUser) {
        var tr = `<div class="userPermissao">
                  <input type="text" name="matriculaUser" value="${i.matricula}" readonly>
                  <input type="text" name="nameUser" value="${i.nome}" readonly>
                  <input type="text" name="emailUser" value="${i.email}" readonly>`

        if (i.isRequisitante === true) {
            var chkIsRequisitante = `<select name="isRequisitante">
            <option value="true" selected>Permitido</option>
            <option value="false">Não permitido</option>
          </select>`;
        } else {
            var chkIsRequisitante = `<select name="isRequisitante">
            <option value="true">Permitido</option>
            <option value="false" selected>Não permitido</option>
          </select>`;
        }

        if (i.isAlmox === true) {
            var chkIsAlmox = `<select name="isAlmox">
            <option value="true" selected>Permitido</option>
            <option value="false">Não permitido</option>
          </select>`;
        } else {
            var chkIsAlmox = `<select name="isAlmox">
            <option value="true">Permitido</option>
            <option value="false" selected>Não permitido</option>
          </select>`;
        }

        if (i.isAdmAlmox === true) {
            var chkIsAdmAlmox = `<select name="isAdmAlmox">
            <option value="true" selected>Permitido</option>
            <option value="false">Não permitido</option>
          </select>
          </div> `;
        } else {
            var chkIsAdmAlmox = `<select name="isAdmAlmox">
            <option value="true">Permitido</option>
            <option value="false" selected>Não permitido</option>
          </select>
         </div> `;
        }

        tbodyPer.innerHTML += tr + chkIsRequisitante + chkIsAlmox + chkIsAdmAlmox
    }
}
