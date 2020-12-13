// initial Leaflet map options
const options = {
    zoomSnap: .1,
    center: [30, -120],
    zoom: 8,
    zoomControl: false
}

// create Leaflet map and apply options
const map = L.map('map', options);


// add control in new position
L.control.zoom({ position: 'topright' }).addTo(map);


// mapbox API parameters
// style url mapbox://styles/aimeeavant/ckijhwz2p04yu17qm9o8ooepa
// styrle url mapbox://styles/aimeeavant/ckikfdujb0w0317np2bjaax0s
const accessToken = `pk.eyJ1IjoiYWltZWVhdmFudCIsImEiOiJjajd2ZWp3NjQwNGx4MndudjVqbGd1ZG1xIn0.5j60jT7XVIkSKpw7Y9aJXA`
const mapboxAccount = 'aimeeavant'
const MapboxStyle = 'ckikfdujb0w0317np2bjaax0s'


// request a mapbox raster tile layer and add to map
   L.tileLayer(`https://api.mapbox.com/styles/v1/${mapboxAccount}/${MapboxStyle}/tiles/256/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution: ' Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
  }).addTo(map);


// Use JQuery to get data for California outline and set map display
// data used for basemap position only

$.getJSON("../data/california.geojson", function (data) {
  // jQuery method uses AJAX request for the GeoJSON data
  console.log(data);
  
  const california = L.geoJson(data, {
    // style counties with initial default path options
    style: function (feature) {
      return {
        weight: 1,
        strokeOpacity: 1,
        fillOpacity: 0,
      };
    }
  }) // end of conversion to Leaflet object
    .addTo(map); 

  // fit the map's bounds and zoom level using the counties extent
  // add padding
  map.fitBounds(california.getBounds(), {
    padding: [5, 5] // add padding around counties
  });

}); // end getJSON