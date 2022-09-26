//Relogio
function getTime() {
    var time = new Date();
    var horas = time.getHours();
    var minutos = time.getMinutes();
    var segundos = time.getSeconds();
    var txttime = document.getElementById('relogio')

    if (horas < 10) {
        horas = `0${horas}`
    }
    if (minutos < 10) {
        minutos = `0${minutos}`
    }
    if (segundos < 10) {
        segundos = `0${segundos}`
    }

    txttime.innerHTML = `${horas}:${minutos}:${segundos}`

}

setInterval(getTime, 1000);