let currentYear = 1971;

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
L.control.zoom({ position: 'bottomright' }).addTo(map);

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

$.getJSON("./data/california.geojson", function (data) {
    // jQuery method uses AJAX request for the GeoJSON data
    console.log(data);

    const california = L.geoJson(data, {
        // style counties with initial default path options
        style: function (feature) {
            return {
                color: '#476130',
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

$.getJSON("./data/ca_counties.geojson", function (data) {
    // jQuery method uses AJAX request for the GeoJSON data
    console.log("counties");
    console.log(data);
    const counties = L.geoJson(data, {
        // style counties with initial default path options
        style: function (feature) {
            return {
                color: '#476130',
                weight: .5,
                strokeOpacity: 1,
                fillOpacity: 0,
                dashArray: '4 1 2 3'
            };
        }
    }) // end of conversion to Leaflet object
        .addTo(map);
}); // end getJSON

// get acre data and convert the data into a map-ready Leaflet L.geoJson layer
var dataImport = omnivore.csv('./data/GrapeAcreData-v13-altversion.csv')
    .on('ready', function (e) {
        drawMap(e.target.toGeoJSON());
    })
    .on('error', function (e) {
        console.log(e.error[0].message);
    })




// ++++++++++ DRAW MAP +++++++++++++++
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
    const chLayer = L.geoJson(data, options).addTo(map);
    const geLayer = L.geoJson(data, options).addTo(map);
    const meLayer = L.geoJson(data, options).addTo(map);
    const pgLayer = L.geoJson(data, options).addTo(map);
    const pnLayer = L.geoJson(data, options).addTo(map);
    const reLayer = L.geoJson(data, options).addTo(map);
    const sbLayer = L.geoJson(data, options).addTo(map);
    const syLayer = L.geoJson(data, options).addTo(map);
    const ziLayer = L.geoJson(data, options).addTo(map);

    // add the layer controls 
    drawLayerControl(csLayer, chLayer, geLayer, meLayer, pgLayer, pnLayer, reLayer, sbLayer, syLayer, ziLayer, currentYear);

    // add the slider 
    drawSlider(csLayer, chLayer, geLayer, meLayer, pgLayer, pnLayer, reLayer, sbLayer, syLayer, ziLayer, currentYear);

    // add the legend
    drawLegend(csLayer, chLayer, geLayer, meLayer, pgLayer, pnLayer, reLayer, sbLayer, syLayer, ziLayer, currentYear);

    // process each layer's data 
    processLayer(csLayer, chLayer, geLayer, meLayer, pgLayer, pnLayer, reLayer, sbLayer, syLayer, ziLayer, currentYear);

} // end of drawMap


// ++++++++++ DRAW LAYER CONTROL +++++++++++++++
function drawLayerControl(csLayer, chLayer, geLayer, meLayer, pgLayer, pnLayer, reLayer, sbLayer, syLayer, ziLayer, currentYear) {

    // add layer controls
    const sourceLayers = {
        "Cabernet Sauvignon": csLayer,
        "Chardonnay": chLayer,
        "Gew&uuml;rztraminer": geLayer,
        "Merlot": meLayer,
        "Pinot Gris (Pinot Grigio)": pgLayer,
        "Pinot Noir": pnLayer,
        "Riesling": reLayer,
        "Sauvignon Blanc": sbLayer,
        "Syrah": syLayer,
        "Zinfandel": ziLayer
    }

    // create Leaflet control for layer visibility
    // basemap, source layers, options
    var layerControl = L.control.layers(null, sourceLayers, { 
        collapsed: false, 
        position: 'topleft',
    }).addTo(map);

}

// ++++++++++ DRAW SLIDER +++++++++++++++
function drawSlider(csLayer, chLayer, geLayer, meLayer, pgLayer, pnLayer, reLayer, sbLayer, syLayer, ziLayer, currentYear) {
    // UI slider
    var sliderControl = L.control({
        position: 'bottomleft'
    });

    sliderControl.onAdd = function (map) {
        var controls = L.DomUtil.get("slider");
        L.DomEvent.disableScrollPropagation(controls);
        L.DomEvent.disableClickPropagation(controls);
        return controls;
    }
    sliderControl.addTo(map);


    //select the slider's input and listen for change
    $('#slider input[type=range]')
        .on('input', function () {

            // current value of slider is current year
            var currentYear = this.value;

            if (currentYear == 2021) {
                currentYear = 2019;
            }

            // resize the circles with updated year
            processLayer(csLayer, chLayer, geLayer, meLayer, pgLayer, pnLayer, reLayer, sbLayer, syLayer, ziLayer, currentYear);

            // update heading
            $('#slider h3 span').html(currentYear);

        });
}


// ++++++++++ DRAW LEGEND +++++++++++++++
function drawLegend(csLayer, chLayer, geLayer, meLayer, pgLayer, pnLayer, reLayer, sbLayer, syLayer, ziLayer, currentYear) {
    // create Leaflet control for the legend
    var legendControl = L.control({
        position: 'topright'
    });

    // when the control is added to the map
    legendControl.onAdd = function (map) {
        // select the legend using id attribute of legend
        var legend = L.DomUtil.get("legend-container");
        // disable scroll and click functionality 
        L.DomEvent.disableScrollPropagation(legend);
        L.DomEvent.disableClickPropagation(legend);
        // return the selection
        return legend;
    }
    legendControl.addTo(map);

    // manually select three numbers
    const minValue = 500;
    const midValue = 3000;
    const maxValue = 10000;

    // calculate Radius
    const minRadius = getRadius(minValue);
    const midRadius = getRadius(midValue);
    const maxRadius = getRadius(maxValue);

    // calculate Diameter
    const minDiameter = getRadius(minValue) * 2;
    const midDiameter = getRadius(midValue) * 2;
    const maxDiameter = getRadius(maxValue) * 2;

    // select circles container and set the height
    $(".legend-circles").css('height', maxDiameter.toFixed());

    // set width and height for max circle
    $('.legend-max').css({
        'width': maxDiameter.toFixed(),
        'height': maxDiameter.toFixed(),
        'border-radius': '50%'
    });
    // set width and height for mid circle and position
    $('.legend-mid').css({
        'width': midDiameter.toFixed(),
        'height': midDiameter.toFixed(),
        'border-radius': '50%',
        'bottom': 0,
        'left': maxRadius - midRadius
    })
    // set width and height for min circle and position
    $('.legend-min').css({
        'width': minDiameter.toFixed(),
        'height': minDiameter.toFixed(),
        'border-radius': '50%',
        'bottom': 0,
        'left': maxRadius - minRadius
    })

    // label the max and median value
    $(".legend-min-label").html(minValue.toLocaleString());
    $(".legend-mid-label").html(midValue.toLocaleString());
    $(".legend-max-label").html(maxValue.toLocaleString());

    // adjust the position of the min based on size of circle
    $(".legend-min-label").css({
        'bottom': minDiameter - 8,
        'left': maxDiameter + 15
    });

    // adjust the position of the mid based on size of circle
    $(".legend-mid-label").css({
        'bottom': midDiameter - 8,
        'left': maxDiameter + 15
    });

    // adjust the position of the max based on size of circle
    $(".legend-max-label").css({
        'bottom': maxDiameter - 8,
        'left': maxDiameter + 15
    });

    // insert hr elements to connect value label to top of each circle
    $("<hr>").insertBefore(".legend-min-label").css({
        'bottom': minDiameter,
        'left': maxRadius,
        'border': '1px dashed #ccc',
        'position': 'absolute',
        'width': maxRadius + 10
    });

    $("<hr>").insertBefore(".legend-mid-label").css({
        'bottom': midDiameter,
        'left': maxRadius,
        'border': '1px dashed #ccc',
        'position': 'absolute',
        'width': maxRadius + 10
    });

    $("<hr>").insertBefore(".legend-max-label").css({
        'bottom': maxDiameter,
        'left': maxRadius,
        'border': '1px dashed #ccc',
        'position': 'absolute',
        'width': maxRadius + 10
    });
}





// ++++++++++ PROCESS LAYER DATA +++++++++++++++
function processLayer(csLayer, chLayer, geLayer, meLayer, pgLayer, pnLayer, reLayer, sbLayer, syLayer, ziLayer, currentYear) {

    // hide info panel from view initially
     const info = $('#info').hide();
    // const info = $('#info')

    // set radius based on year displayed
    csLayer.eachLayer(function (layer) {
        let value = layer.feature.properties[`CS${currentYear}`]
        const radius = getRadius(value)
        layer.setRadius(radius);
        layer.bringToFront()
    });

    chLayer.eachLayer(function (layer) {
        let value = layer.feature.properties[`CH${currentYear}`]
        const radius = getRadius(value)
        layer.setRadius(radius);
        // reset the layer style
        layer.setStyle({
            stroke: true,
            color: '#d6940a',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#d6940a',
            fillOpacity: 0.2,
        });
    });

    geLayer.eachLayer(function (layer) {
        let value = layer.feature.properties[`GE${currentYear}`]
        const radius = getRadius(value)
        layer.setRadius(radius);
        layer.setStyle({
            stroke: true,
            color: '#d6940a',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#d6940a',
            fillOpacity: 0.2,
        });
    });

    meLayer.eachLayer(function (layer) {
        let value = layer.feature.properties[`ME${currentYear}`]
        const radius = getRadius(value)
        layer.setRadius(radius);
    });

    pgLayer.eachLayer(function (layer) {
        let value = layer.feature.properties[`PG${currentYear}`]
        const radius = getRadius(value)
        layer.setRadius(radius);
        layer.setStyle({
            stroke: true,
            color: '#d6940a',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#d6940a',
            fillOpacity: 0.2,
        });
    });

    pnLayer.eachLayer(function (layer) {
        let value = layer.feature.properties[`PN${currentYear}`]
        const radius = getRadius(value)
        layer.setRadius(radius);
    });

    reLayer.eachLayer(function (layer) {
        let value = layer.feature.properties[`RE${currentYear}`]
        const radius = getRadius(value)
        layer.setRadius(radius);
    });

    sbLayer.eachLayer(function (layer) {
        let value = layer.feature.properties[`SB${currentYear}`]
        const radius = getRadius(value)
        layer.setRadius(radius);
        layer.setStyle({
            stroke: true,
            color: '#d6940a',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#d6940a',
            fillOpacity: 0.2,
        });
    });

    syLayer.eachLayer(function (layer) {
        let value = layer.feature.properties[`SY${currentYear}`]
        const radius = getRadius(value)
        layer.setRadius(radius);
    });

    ziLayer.eachLayer(function (layer) {
        let value = layer.feature.properties[`ZI${currentYear}`]
        const radius = getRadius(value)
        layer.setRadius(radius);
    });

    // start info
    // add mouseover info panels to each layer
    csLayer.on('mouseover', function (e) {
        console.log(e)
        // remove the none class to display and show
        info.show();
        // access properties of target layer
        const props = e.layer.feature.properties;
        // populate HTML elements with relevant info
        $('span.infoName').html(props.County);
        $('span.infoGrape').html('Cabernet Sauvignon');
        $('span.infoYear').html(currentYear);
        $('span.infoAcres').html(props[`CS${currentYear}`]);

        let grapeCode = 'CS';
        let grapeValues = makeSparkline(e.layer, grapeCode);
        console.log(grapeValues)
        $('.grapespark').sparkline(grapeValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#520a1f',
            spotRadius: 0,
            lineWidth: .5
        });

        // raise opacity level as visual affordance
        e.layer.setStyle({
            fillOpacity: .8,
            fillColor: 'LightGoldenrodYellow'
        });
    })
    csLayer.on('mouseout', function (e) {
        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            stroke: true,
            color: '#520a1f',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#520a1f',
            fillOpacity: 0.2,
        });
    });
    // end info 

       // start info
    // add mouseover info panels to each layer
    chLayer.on('mouseover', function (e) {
        console.log(e)
        // remove the none class to display and show
        info.show();
        // access properties of target layer
        const props = e.layer.feature.properties;
        // populate HTML elements with relevant info
        $('span.infoName').html(props.County);
        $('span.infoGrape').html('Chardonnay');
        $('span.infoYear').html(currentYear);
        $('span.infoAcres').html(props[`CS${currentYear}`]);

        let grapeCode = 'CH';
        let grapeValues = makeSparkline(e.layer, grapeCode);
        console.log(grapeValues)
        $('.grapespark').sparkline(grapeValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#d6940a',
            spotRadius: 0,
            lineWidth: .5
        });

        // raise opacity level as visual affordance
        e.layer.setStyle({
            fillOpacity: .8,
            fillColor: 'LightGoldenrodYellow'
        });
    })
    chLayer.on('mouseout', function (e) {
        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            stroke: true,
            color: '#d6940a',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#d6940a',
            fillOpacity: 0.2,
        });
    });
    // end info 

       // start info
    // add mouseover info panels to each layer
    geLayer.on('mouseover', function (e) {
        console.log(e)
        // remove the none class to display and show
        info.show();
        // access properties of target layer
        const props = e.layer.feature.properties;
        // populate HTML elements with relevant info
        $('span.infoName').html(props.County);
        $('span.infoGrape').html("Gew&uuml;rztraminer");
        $('span.infoYear').html(currentYear);
        $('span.infoAcres').html(props[`CS${currentYear}`]);

        let grapeCode = 'GE';
        let grapeValues = makeSparkline(e.layer, grapeCode);
        console.log(grapeValues)
        $('.grapespark').sparkline(grapeValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#d6940a',
            spotRadius: 0,
            lineWidth: .5
        });


        // raise opacity level as visual affordance
        e.layer.setStyle({
            fillOpacity: .8,
            fillColor: 'LightGoldenrodYellow'
        });
    })
    geLayer.on('mouseout', function (e) {
        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            stroke: true,
            color: '#d6940a',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#d6940a',
            fillOpacity: 0.2,
        });
    });
    // end info 

       // start info
    // add mouseover info panels to each layer
    meLayer.on('mouseover', function (e) {
        console.log(e)
        // remove the none class to display and show
        info.show();
        // access properties of target layer
        const props = e.layer.feature.properties;
        // populate HTML elements with relevant info
        $('span.infoName').html(props.County);
        $('span.infoGrape').html('Merlot');
        $('span.infoYear').html(currentYear);
        $('span.infoAcres').html(props[`CS${currentYear}`]);

        let grapeCode = 'ME';
        let grapeValues = makeSparkline(e.layer, grapeCode);
        console.log(grapeValues)
        $('.grapespark').sparkline(grapeValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#520a1f',
            spotRadius: 0,
            lineWidth: .5
        });

        // raise opacity level as visual affordance
        e.layer.setStyle({
            fillOpacity: .8,
            fillColor: 'LightGoldenrodYellow'
        });
    })
    meLayer.on('mouseout', function (e) {
        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            stroke: true,
            color: '#520a1f',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#520a1f',
            fillOpacity: 0.2,
        });
    });
    // end info 

       // start info
    // add mouseover info panels to each layer
    pgLayer.on('mouseover', function (e) {
        console.log(e)
        // remove the none class to display and show
        info.show();
        // access properties of target layer
        const props = e.layer.feature.properties;
        // populate HTML elements with relevant info
        $('span.infoName').html(props.County);
        $('span.infoGrape').html('Pinot Gris (Pinot Grigio)');
        $('span.infoYear').html(currentYear);
        $('span.infoAcres').html(props[`CS${currentYear}`]);

        let grapeCode = 'PG';
        let grapeValues = makeSparkline(e.layer, grapeCode);
        console.log(grapeValues)
        $('.grapespark').sparkline(grapeValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#d6940a',
            spotRadius: 0,
            lineWidth: .5
        });

        // raise opacity level as visual affordance
        e.layer.setStyle({
            fillOpacity: .8,
            fillColor: 'LightGoldenrodYellow'
        });
    })
    pgLayer.on('mouseout', function (e) {
        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            stroke: true,
            color: '#d6940a',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#d6940a',
            fillOpacity: 0.2,
        });
    });
    // end info 

       // start info
    // add mouseover info panels to each layer
    pnLayer.on('mouseover', function (e) {
        console.log(e)
        // remove the none class to display and show
        info.show();
        // access properties of target layer
        const props = e.layer.feature.properties;
        // populate HTML elements with relevant info
        $('span.infoName').html(props.County);
        $('span.infoGrape').html('Pinot Noir');
        $('span.infoYear').html(currentYear);
        $('span.infoAcres').html(props[`CS${currentYear}`]);

        let grapeCode = 'PN';
        let grapeValues = makeSparkline(e.layer, grapeCode);
        console.log(grapeValues)
        $('.grapespark').sparkline(grapeValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#520a1f',
            spotRadius: 0,
            lineWidth: .5
        });

        // raise opacity level as visual affordance
        e.layer.setStyle({
            fillOpacity: .8,
            fillColor: 'LightGoldenrodYellow'
        });
    })
    pnLayer.on('mouseout', function (e) {
        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            stroke: true,
            color: '#520a1f',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#520a1f',
            fillOpacity: 0.2,
        });
    });
    // end info 

       // start info
    // add mouseover info panels to each layer
    reLayer.on('mouseover', function (e) {
        console.log(e)
        // remove the none class to display and show
        info.show();
        // access properties of target layer
        const props = e.layer.feature.properties;
        // populate HTML elements with relevant info
        $('span.infoName').html(props.County);
        $('span.infoGrape').html('Reisling');
        $('span.infoYear').html(currentYear);
        $('span.infoAcres').html(props[`CS${currentYear}`]);

        let grapeCode = 'RE';
        let grapeValues = makeSparkline(e.layer, grapeCode);
        console.log(grapeValues)
        $('.grapespark').sparkline(grapeValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#d6940a',
            spotRadius: 0,
            lineWidth: .5
        });

        // raise opacity level as visual affordance
        e.layer.setStyle({
            fillOpacity: .8,
            fillColor: 'LightGoldenrodYellow'
        });
    })
    reLayer.on('mouseout', function (e) {
        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            stroke: true,
            color: '#d6940a',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#d6940a',
            fillOpacity: 0.2,
        });
    });
    // end info 

       // start info
    // add mouseover info panels to each layer
    sbLayer.on('mouseover', function (e) {
        console.log(e)
        // remove the none class to display and show
        info.show();
        // access properties of target layer
        const props = e.layer.feature.properties;
        // populate HTML elements with relevant info
        $('span.infoName').html(props.County);
        $('span.infoGrape').html('Sauvignon Blanc');
        $('span.infoYear').html(currentYear);
        $('span.infoAcres').html(props[`CS${currentYear}`]);

        let grapeCode = 'SB';
        let grapeValues = makeSparkline(e.layer, grapeCode);
        console.log(grapeValues)
        $('.grapespark').sparkline(grapeValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#d6940a',
            spotRadius: 0,
            lineWidth: .5
        });

        // raise opacity level as visual affordance
        e.layer.setStyle({
            fillOpacity: .8,
            fillColor: 'LightGoldenrodYellow'
        });
    })
    sbLayer.on('mouseout', function (e) {
        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            stroke: true,
            color: '#d6940a',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#d6940a',
            fillOpacity: 0.2,
        });
    });
    // end info 

       // start info
    // add mouseover info panels to each layer
    syLayer.on('mouseover', function (e) {
        console.log(e)
        // remove the none class to display and show
        info.show();
        // access properties of target layer
        const props = e.layer.feature.properties;
        // populate HTML elements with relevant info
        $('span.infoName').html(props.County);
        $('span.infoGrape').html('Syrah');
        $('span.infoYear').html(currentYear);
        $('span.infoAcres').html(props[`CS${currentYear}`]);

        let grapeCode = 'SY';
        let grapeValues = makeSparkline(e.layer, grapeCode);
        console.log(grapeValues)
        $('.grapespark').sparkline(grapeValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#D98939 ',
            spotRadius: 0,
            lineWidth: .5
        });

        // raise opacity level as visual affordance
        e.layer.setStyle({
            fillOpacity: .8,
            fillColor: 'LightGoldenrodYellow'
        });
    })
    syLayer.on('mouseout', function (e) {
        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            stroke: true,
            color: '#520a1f',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#520a1f',
            fillOpacity: 0.2,
        });
    });
    // end info 

       // start info
    // add mouseover info panels to each layer
    ziLayer.on('mouseover', function (e) {
        console.log(e)
        // remove the none class to display and show
        info.show();
        // access properties of target layer
        const props = e.layer.feature.properties;
        // populate HTML elements with relevant info
        $('span.infoName').html(props.County);
        $('span.infoGrape').html('Zinfandel');
        $('span.infoYear').html(currentYear);
        $('span.infoAcres').html(props[`CS${currentYear}`]);

        let grapeCode = 'ZI';
        let grapeValues = makeSparkline(e.layer, grapeCode);
        console.log(grapeValues)
        $('.grapespark').sparkline(grapeValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#D98939 ',
            spotRadius: 0,
            lineWidth: .5
        });

        // raise opacity level as visual affordance
        e.layer.setStyle({
            fillOpacity: .8,
            fillColor: 'LightGoldenrodYellow'
        });
    })
    ziLayer.on('mouseout', function (e) {
        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            stroke: true,
            color: '#520a1f',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#520a1f',
            fillOpacity: 0.2,
        });
    });
    // end info 

    // when the mouse moves on the document
    $(document).mousemove(function (e) {
        // first offset from the mouse position of the info window
        info.css({
            "left": e.pageX + 6,
            "top": e.pageY - info.height() - 25
        });

        // if it crashes into the top, flip it lower right
        if (info.offset().top < 4) {
            info.css({
                "top": e.pageY + 15
            });
        }
        // if it crashes into the right, flip it to the left
        if (info.offset().left + info.width() >= $(document).width() - 40) {
            info.css({
                "left": e.pageX - info.width() - 80
            });
        }
    });




} // end process layer data

function getRadius(val) {
    // make sure 0 values are not plotted
    if (val == 0) {
        radius == 0;
    } else {
        var radius = Math.sqrt(val / Math.PI);
    }
    return radius * .6;
}

function makeSparkline(layer, grapeCode) {
    // empty array value
    const grapeValues = [];

    // access properties of target layer
    const props = layer.feature.properties;

    // add values for each year
    grapeValues.push(props[`${grapeCode}1971`]);
    grapeValues.push(props[`${grapeCode}1981`]);
    grapeValues.push(props[`${grapeCode}1991`]);
    grapeValues.push(props[`${grapeCode}2001`]);
    grapeValues.push(props[`${grapeCode}2019`]);

    console.log(grapeValues);

    return grapeValues;

}


function actLikeComment(val) {

    // ** mouseover **
    // since boysLayer is on top, use to detect mouseover events
    csLayer.on('mouseover', function (e) {

        // remove the none class to display and show
        info.show();

        // access properties of target layer
        const props = e.layer.feature.properties;

        // populate HTML elements with relevant info
        $('#info span').html(props.COUNTY);
        $(".girls span:first-child").html(`(grade ${currentGrade})`);
        $(".boys span:first-child").html(`(grade ${currentGrade})`);
        $(".girls span:last-child").html(Number(props[`G${currentGrade}`]).toLocaleString());
        $(".boys span:last-child").html(Number(props[`B${currentGrade}`]).toLocaleString());

        // raise opacity level as visual affordance
        e.layer.setStyle({
            fillOpacity: .8,
            fillColor: 'LightGoldenrodYellow'
        });

        // empty arrays for boys and girls values
        const grapeValues = [];


        // loop through the grade levels and push values into those arrays
        for (let i = 1; i <= 8; i++) {
            girlsValues.push(props['G' + i]);
            boysValues.push(props['B' + i]);
        }
        console.log(girlsValues);
        $('.grapespark').sparkline(grapeValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#D98939 ',
            spotRadius: 0,
            lineWidth: .5
        });




    })

    // ** mouseout
    // hide the info panel when mousing off layergroup and remove affordance opacity
    csLayer.on('mouseout', function (e) {

        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            stroke: true,
            color: '#520a1f',
            weight: 1,
            opacity: 1,
            fill: true,
            fillColor: '#520a1f',
            fillOpacity: 0.2,
        });
    });



}


