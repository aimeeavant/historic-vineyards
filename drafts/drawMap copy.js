
function drawMap(data) {

    // access to data here called in app.js
    console.log(data);

    // default options
    const options = {
        pointToLayer: function (feature, layer) {
            return L.circleMarker(layer, {
                stroke: true,
				color: '#520a1f',
				weight: 1,
				opacity: 1,
				fill: true,
				fillColor: '#520a1f',
                fillOpacity: 0.2,
            })
        }
    }

    // add layers
    const csLayer = L.geoJson(data, options).addTo(map);
    console.log("cslayer")
    console.log(cslayer)
    const chLayer = L.geoJson(data, options).addTo(map);
    const geLayer = L.geoJson(data, options).addTo(map);
    const meLayer = L.geoJson(data, options).addTo(map);
    const gsLayer = L.geoJson(data, options).addTo(map);
    const pnLayer = L.geoJson(data, options).addTo(map);
    const reLayer = L.geoJson(data, options).addTo(map);
    const sbLayer = L.geoJson(data, options).addTo(map);
    const syLayer = L.geoJson(data, options).addTo(map);
    const ziLayer = L.geoJson(data, options).addTo(map);


    // calculate and set the radius
    resizeCircles(csLayer, chLayer, geLayer, meLayer, gsLayer, pnLayer, reLayer, sbLayer, syLayer, ziLayer, 1971);

    drawLegend(csLayer)

    // update map with slider input
    drawSlider(csLayer);


}


// add layer controls
const sourceLayers = {
    "Cabernet Sauvignon": "cbLayer",
    "Chardonnay": "chLayer",
    "Gew&uuml;rztraminer": "geLayer",
    "Merlot": "meLayer",
    "Pinot Gris (Pinot Grigio)": "pgLayer",
    "Pinot Noir": "pnLayer",
    "Riesling": "riLayer",
    "Sauvignon Blanc": "sbLayer",
    "Syrah": "syLayer",
    "Zinfandel": "ziLayer"
}


// create Leaflet control for layer visibility
// basemap, source layers, options
var layerControl = L.control.layers(null, sourcesLayers, { collapsed:false, position: 'topleft' }).addTo(map);