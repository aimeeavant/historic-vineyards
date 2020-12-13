/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
		FUNCTION:   updateMap() 
		PURPOSE:  
					// function is called initially on the page load ??=in the drawMap() function
					// and then
					// once every time the user updates the map by selecting a new
					// dropdown option. function accepts the L.geoJson LayerGroup object
					// as a parameter, loops through all the layers, updates the fillColor
					// option property based on the calculated (normalized) value, and updates the
					// tooltip with current information.
					// function also calls the updateLegend function to update with the new
					// classification breaks
		CALLED IN:    drawMap()
			PASSED:     counties/Leaflet L.geoJson() object 
		CALLS TO:     getClassBreaks()
			PASSES:     counties/Leaflet L.geoJson() object
			RETURNED:   breaks/array
		CALLS TO:     getColor()
		*/
		function updateMap(counties) {

			// get the class breaks for the current data attribute
			const breaks = getClassBreaks(counties);

			// loop through each county layer to update the color and tooltip info
			counties.eachLayer(function (layer) {

				// shortcut for layer properties
				const props = layer.feature.properties;

				// set the fill color of layer based on its normalized data value
				// attributeValue and normValue are variables set outside function
				// can tell this because of brackets?
				layer.setStyle({
					fillColor: getColor(props[attributeValue] / props[normValue], breaks)
				});

				// assemble string sequence of info for tooltip (end line break with + operator)
				let tooltipInfo = `<b>${props["NAME"]} County</b></br>
					${((props[attributeValue] / props[normValue]) * 100).toLocaleString()}%`

					var offSet = L.point(50, 0);
			
				// bind a tooltip to layer with county-specific information
				layer.bindTooltip(tooltipInfo, {
					// sticky property so tooltip follows the mouse
					sticky: true,
					offset: offSet
				});

			}); // end each layer

			// update the legend with the current data attribute information
			addLegend(breaks);


		} // end of updateMap()

		/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
		FUNCTION:   addLegend()
		PURPOSE:  
					// function is called once, selects a DOM element to hold the 
					// map legend, and adds it as a Leaflet control element
					// create a new Leaflet control object, and position it top left
		CALLED IN:  updateMap()
			PASSED: breaks
		CALLS TO:  
		*/
		function addLegend(breaks) {
			// create a new Leaflet control object, and position it top left
			const legendControl = L.control({ position: 'topleft' });

			// when the legend is added to the map
			legendControl.onAdd = function () {

				// select the div element with an id attribute of legend
				// ?? why have the div in the html and not just create the element with Leaflet?
				// ?? why make a const if not used again, it is redelared
				const legend = L.DomUtil.get('legend');
				// disable scroll and click/touch on map when on legend
				L.DomEvent.disableScrollPropagation(legend);
				L.DomEvent.disableClickPropagation(legend);
				// return the selection to the method

				return legend;
			};

			// add the empty legend div to the map
			legendControl.addTo(map);

            updateLegend(breaks);

		} // end addLegend()

		/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
		FUNCTION:   updateLegend()
		PURPOSE:  
					// function accepts an array of classification breaks values as
					// a parameter and draws/updates the legend based upon these values
					// select the legend, add a title, begin an unordered list and assign to a variable
		CALLED IN:  addLegend()
            PASSED: breaks
		CALLS TO:  
		*/
            function updateLegend(breaks) {
                
                // select the legend, add a title, begin an unordered list and assign to a variable
                // attributeValue and normValue are variables set outside function
                // labels is an object set outside function
                var legendInside = $('#legend').html(`<h3>Residential Permit Type</h3><h5 class="legendSubhead">${labels[attributeValue]}</h5>`);

                // loop through the Array of classification break values
                for (let i = 0; i <= breaks.length - 1; i++) {
                    let color = getColor(breaks[i][0], breaks);

                    legendInside.append(
                        `<p class="legendPara"> <span style="background:${color};"></span>
                        <label>${(breaks[i][0] * 100).toFixed(0)}% &mdash;
                         ${(breaks[i][1] * 100).toFixed(0)}%</label></p>`);
                }

            }

		/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
		FUNCTION:   addUi() 
		PURPOSE:  
					// function selects a DOM element for the UI dropdown,
					// adds it to the map as a Leaflet control object
					// and listens for changes to the dropdown, calling the
					// updateMap function when the user selects a new value
					// create the control
		CALLED IN:  drawMap()
			PASSED: counties/Leaflet L.geoJson() object created from the data variable
		CALLS TO:   updateMap()
			PASSES: counties/Leaflet L.geoJson() object created from the data variable
		METHODS: JQuery selectors with combined  | https://api.jquery.com/category/selectors/hierarchy-selectors/
		METHODS: JQuery change() method | http://api.jquery.com/change/
		
		*/
		function addUi(counties) {
			// create the control
			var selectControl = L.control({ position: "topright" });

			// when control is added
			selectControl.onAdd = function () {
				// get the element with id attribute of ui-controls
				return L.DomUtil.get("dropdown-ui");
			};
			// add the control to the map
			selectControl.addTo(map);

			$('#dropdown-ui select').change(function () {
				// code executed here when change event occurs
				console.log(`Something changed at ${Date.now()}`);
				console.log(this); // returns the select element
				// determine which of the options the user has selected
				console.log(this.value);
				// reassign the attribute variable to the selected value 
				// attributeValue = this.value; does not work ??
				attributeValue = `${this.value}`;
				// redraw map, need to include dataLayer ?? 
				// doesn't work with dataLayer, used counties instead
			 updateMap(counties);
			});

		} // end addUi()





		/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
		FUNCTION:   getClassBreaks()
		PURPOSE:  
					// function accepts the Leaflet L.GeoJson LayerGroup
					// as a parameter and loops through the feature properties
					// to derive a set of classification breaks based upon the current
					// selected attribute. function returns these breaks as an array
		CALLED IN:  updateMap() 
			PASSED:    counties variable/Leaflet L.geoJson() object 
		RETURNS:    breaks array
		CALLS TO:   none
		*/
		function getClassBreaks(counties) {
			// create temp/empty Array for storing values
			const values = [];

			// loop through all the counties
			// attributeValue and normValue are variables set outside function
			counties.eachLayer(function (layer) {
				let value = layer.feature.properties[attributeValue] / layer.feature.properties[normValue];
				values.push(value); // push the normalized value for each layer into the Array
			});
			console.log("now in getClassBreaks");
			console.log(counties);

			// determine similar clusters
			const clusters = ss.ckmeans(values, 5);

			// create an array of the lowest value within each cluster
			const breaks = clusters.map(function (cluster) {
				return [cluster[0], cluster.pop()];
			});

			//return array of arrays, e.g., [[0.24,0.25], [0.26, 0.37], etc]
			return breaks;
		}



// Use Leaflet Omnivore to load and parse CSV data into Leaflet GeoJson layer
// then convert it back to standard GeoJson remake the Leaflet GeoJson layer with other options
let cabernet_sauvignon = omnivore.csv('../data/GrapeAcreData-cabernet_sauvignon-v11.csv')
    .on('ready', function (e) {
        console.log(e.target)
        drawMap(e.target.toGeoJSON());
    })
    .on('error', function (e) {
        console.log(e.error[0].message);
    });

// this works
// cabernet_sauvignon.addTo(map);

let cabernet_sauvignon_json = cabernet_sauvignon.toGeoJSON()
console.log("cabernet_sauvignon_json")
console.log(cabernet_sauvignon_json)

    // default options
    let cab_options = {
        pointToLayer: function (feature, ll) {
            return L.circleMarker(ll, {
                opacity: 1,
                weight: 2,
                fillOpacity: 0
            })
        }
    }

function drawMap(data) {
    L.geoJson(data, cab_options).addTo(map);
}

