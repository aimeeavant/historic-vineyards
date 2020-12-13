/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
		FUNCTION:  drawMap()
		PURPOSE:
					// function is called one time, once the data is properly loaded
					// creates a new L.geoJson object and adds it to map, including basic
					// options for the map as well as some interactive mouseover style changes
					// function then calls other functions to add the legend, update the map's
					// thematic encoding (color), and add the UI dropdown element
		CALLED IN: callback function of the jQuery getJSON 
			PASSED: data/json file
		CALLS TO:  updateMap()
			PASSES: counties/Leaflet L.geoJson() object created from the data variable
		CALLS TO:  addUi()
			PASSES: counties/Leaflet L.geoJson() object created from the data variable

			with the grape variety selected draw map based on second variable the year

*/

let grape = cabernet_sauvignon
let year = 1971
drawMap(grape, year)

function getRadius(val) {
	// make sure 0 values are not plotted
	if (val == 0 ) {
		radius == 0;
	} else {
	var radius = Math.sqrt(val / Math.PI);
}
	return radius * .8;
}


function drawMap(data, year) {

	console.log(data)

	const grapeLayer = L.geoJson(data, {
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, {
				stroke: true,
				color: '#520a1f',
				weight: 1,
				opacity: 1,
				fill: true,
				fillColor: '#520a1f',
				fillOpacity: 0.2,
				radius: getRadius(feature.properties[year])
			});
		},
		// add hover/touch functionality to each feature layer
		onEachFeature: function (feature, layer) {
			layer.on('mouseover', function () {
				// change the stroke color and bring that element to the front
				layer.setStyle({
					color: '#d6940a',
					fillColor: '#d6940a',
					weight: 3.5,
				});
			}); // end mouseover

			layer.on('mouseout', function () {
				// reset the layer style to its original stroke color
				layer.setStyle({
					color: '#520a1f',
					fillColor: '#520a1f',
					weight: 1
				});
			}); // end mouseout

				// Create tooltip
                //  get the properties of the for each geojson feature
                var props = layer.feature.properties;

				var content = `<h3>${props.County}</h3>
				<p>${year}: ${props[year]} acres</p>`;

				layer.bindTooltip(content);




		} // end onEachFeature
	}) // end of conversion to Leaflet object
		.addTo(map); // method chaining: run multiple methods on the same element within a single statement. 



} // end of drawMap() function



//LAYERS
//In MAP 672 we created separate layers for different types of power plants from the same GeoJSON data structure by filtering the coal plants from the hydro plants. 



