const menuSelect = document.querySelectorAll('.title');
const url = location.href;
var split = [];
split = url.split('/');
const pag = split[3];

class Menu {
    constructor(menu) {
        this.menu = menu
        this.pag = pag
    }
    go(li) {
        if (i.textContent.toLowerCase().trim() == 'lançamento') var stringClear = 'lancamento'
        if (i.textContent.toLowerCase().trim() == 'adicionar item') var stringClear = 'item'
        if (i.textContent.toLowerCase().trim() == 'requisição') var stringClear = 'requisicao'
        if (i.textContent.toLowerCase().trim() == 'new usuário') var stringClear = 'cadastra'
        if (i.textContent.toLowerCase().trim() == 'permissões') var stringClear = 'permissoes'
        if (stringClear == pag.trim()) {
            li.classList.toggle('active')
        } else {
            if (i.textContent.toLowerCase().trim() == pag.trim()) {
                li.classList.toggle('active')
            }
        }
    }
}

for (var i of menuSelect) {
    var menu = new Menu(i);
    var li = i.parentElement.parentElement
    menu.go(li);
}

const menuEvent = document.querySelector('.menuGlobal');
menuEvent.addEventListener('mouseenter', () => {
    menuEvent.classList.toggle('active')
});
menuEvent.addEventListener('mouseleave', () => {
    menuEvent.classList.toggle('active')
});