// Create variable to hold the map
// slo center: [35.3102, -120.4358]
const map = L.map('map').setView([35.31, -120.43], 6);

const options = {
    minZoom: 0,
    maxZoom: 9,
    opacity: 1,
    tms: true,
    attribution: 'Elevation &copy; <a href="https://www.naturalearthdata.com/">Natural Earth</a>'
};


const tiles = L.tileLayer('https://outragegis.com/tiles/world/ne_v01/{z}/{x}/{y}.jpg', options).addTo(map);

// Add base map
const openTopoTiles = L.tileLayer(
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    maxZoom: 17
});

openTopoTiles.addTo(map);



// add scale bar
L.control.scale({ metric: false, position: 'bottomleft', maxWidth: 200 }).addTo(map);


