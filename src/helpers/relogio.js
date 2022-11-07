//Relogio
function getTime() {
    const time = new Date();
    const horas = time.getHours();
    const minutos = time.getMinutes();
    const segundos = time.getSeconds();
    const txttime = document.getElementById('relogio');

    if (horas < 10) {
        horas = `0${horas}`;
    }
    if (minutos < 10) {
        minutos = `0${minutos}`;
    }
    if (segundos < 10) {
        segundos = `0${segundos}`;
    }

    txttime.innerHTML = `${horas}:${minutos}:${segundos}`;

}

setInterval(getTime, 1000);
