const API_KEY = "aaa87a1f655310e7d4e6ebd7002c9d3a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name;
    city.classList.add("city");
    weather.innerText = data.weather[0].main;
    weather.classList.add("weather");
  });
}

function onGeoError() {
  alert("Cannot Find You. No Weather For You.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);