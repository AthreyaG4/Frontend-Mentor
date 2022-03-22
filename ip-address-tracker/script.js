let map = L.map('map', {zoomControl:false}).setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXRocmV5YWc0IiwiYSI6ImNsMTB1YjlwazJndnkzam5tZ3AzN2xibmoifQ.q62OJoYDFe23YBBboWpvxg'
}).addTo(map);

var myIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconSize: [37, 45],
    iconAnchor: [18.5, 22.5],
});

let marker = L.marker([0,0], {icon: myIcon}).addTo(map);

initApp();

let button = document.querySelector("button");
button.addEventListener("click", async () => {
    let input = document.querySelector("input");
    initApp(input.value);
});

async function initApp(ip){

    // Making the url
    let ipAddress = ip ? `&ipAddress=${ip}` : ``;
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_5lHzfw9rEoa3g1XXBlMppHlpOTfJQ${ipAddress}`;

    // Sending the request and parsing the data
    let response = await fetch(url);
    let data = await response.json();

    // Getting the data
    let resultIp = data.ip;
    let resultIsp = data.isp;
    let resultLocation = `${data.location.country}, ${data.location.region}`;
    let resultTimeZone = `UTC ${data.location.timezone}`;
    let latitude = data.location.lat;
    let longitude = data.location.lng;

    // Updating data to the DOM
    let resultValues = document.querySelectorAll(".result-value");
    resultValues[0].textContent = resultIp;
    resultValues[1].textContent = resultLocation;
    resultValues[2].textContent = resultTimeZone;
    resultValues[3].textContent = resultIsp;

    console.log(data);
    marker.setLatLng([latitude,longitude]);
    map.setView(marker.getLatLng(),13);
}