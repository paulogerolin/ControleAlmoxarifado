//Localização
async function getCoords() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async position => {
            var latitude = position.coords.latitude.toFixed(2);
            var longitude = position.coords.longitude.toFixed(2);
            return getClima(latitude, longitude);
        })
    } else {
        alert('Geolocalização não está disponível')
    }
}
getCoords();

//Cidade-Clima
async function getClima(latitude, longitude) {
    var token = '583fdcd20c0a58e72c82cb974a898b89'
    var urltempo = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${token}`
    var fetchTempo = await fetch(urltempo);
    var resTempo = await fetchTempo.json();
    var cidade = resTempo.name;
    var info = document.getElementById('tempo');
    info.innerHTML = `${cidade}`;
}