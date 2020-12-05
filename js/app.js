

// Create variable to hold initial option.
let options = {
    center: [35.3102, -120.4358],
    zoom: 4,
    zoomSnap: .1,
}

// Create variable to hold the map
var map = L.map('map', options);


var basemap_url = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'

var basemap_attributes = {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    maxZoom: 17
}

var tiles = L.tileLayer(basemap_url, basemap_attributes).addTo(map);


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
   // map.fitBounds(countyLayer.getBounds())

});// end of callback function

