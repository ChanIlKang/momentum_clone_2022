const API_KEY = "d621f8d39ceb11903463c00ee329c079";

function onGeo(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const cityContainer = document.querySelector("#weather span:last-child");

            weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            cityContainer.innerText = data.name;
        });
}

function onGeoError() {
    alert("which demension do you live?");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);


// {
//     "coord": { "lon": 126.7266, "lat": 37.5 },
//     "weather": [{
//         "id": 803,
//          "main": "Clouds",
//          "description": "broken clouds",
//          "icon": "04n"
//         }],
//     "base": "stations",
//     "main": {
//         "temp": 294.27,
//         "feels_like": 294.89,
//         "temp_min": 294.1,
//         "temp_max": 296.18,
//         "pressure": 1007,
//         "humidity": 94 },
//     "visibility": 8000,
//     "wind": { "speed": 2.06, "deg": 310 },
//     "clouds": { "all": 75 },
//     "dt": 1655656534,
//     "sys": { "type": 1, "id": 8105, "country": "KR", "sunrise": 1655669519, "sunset": 1655722625 },
// "timezone": 32400,
//     "id": 1838716,
//         "name": "Bucheon-si",
//             "cod": 200
// }
