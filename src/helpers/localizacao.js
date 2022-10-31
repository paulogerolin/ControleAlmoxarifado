//Localização
async function getCoords() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async position => {
            const latitude = position.coords.latitude.toFixed(2);
            const longitude = position.coords.longitude.toFixed(2);
            return getClima(latitude, longitude);
        })
    } else {
        alert('Geolocalização não está disponível')
    }
}
getCoords();

//Cidade-Clima
async function getClima(latitude, longitude) {
    const token = '583fdcd20c0a58e72c82cb974a898b89'
    const urltempo = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${token}`
    const fetchTempo = await fetch(urltempo);
    const resTempo = await fetchTempo.json();
    const cidade = resTempo.name;
    const info = document.getElementById('tempo');
    info.innerHTML = `${cidade}`;
}