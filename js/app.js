

// Create variable to hold initial option.
let options = {
    center: [35.5528, -120.8266],
    zoom: 8,
    zoomSnap: .1,
}
// Create variable to hold the map
let map = L.map('map', options);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// add scale bar
L.control.scale({ metric: false, position: 'bottomleft', maxWidth: 200 }).addTo(map);


// -------- Add Data ------>


var countyLayer = jQuery.getJSON("data/sloCountyBoundary.geojson", function (data) {
    var countyLayer = L.geoJson(data, {
        style: function (feature) {
            return {
                //color: '#5E94AD',
                color: 'MidnightBlue',
                weight: 1,
                fillOpacity: 1,
                fillColor: '#1f78b4'
            };
        }
    }).addTo(map);
    // can call to new function here gets the data out of the callback function  
    map.fitBounds(countyLayer.getBounds())

});// end of callback function

