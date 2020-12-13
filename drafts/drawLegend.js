function drawLegend(data) {

    // called in ____________
    // Loop through all counties to get all values
    // Sort results
    // Calculate the largest diameter
    // Modify the CSS rules in the legend Leaflet control to draw two squares
    // Draw labels



    // create Leaflet control for the legend
    var legendControl = L.control({
        position: 'bottomright'
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

    // empty array to hold values
    const dataValues = [];

    // loop through all features (i.e., the schools)
    data.features.forEach(function (school) {
        // for each grade in a school
        for (let grade in school.properties) {
            // shorthand to each value
            const value = school.properties[grade];
            // if the value can be converted to a number 
            // the + operator in front of a number returns a number
            if (+value) {
                //return the value to the array
                dataValues.push(+value);
            }

        }
    });
    // verify your results!
    console.log(dataValues);

    // sort our array
    const sortedValues = dataValues.sort(function (a, b) {
        return b - a;
    });

    // round the highest number and use as our large circle diameter
    const maxValue = Math.round(sortedValues[0] / 1000) * 1000;

    // calc the diameters
    const largeDiameter = getRadius(maxValue) * 2,
        smallDiameter = largeDiameter / 2;

        /* // test
        $("#legend-container").css({
            'background': "red",
        }); */

    // select our circles container and set the height
    $(".legend-circles").css('height', largeDiameter.toFixed());

    // set width and height for large circle
    $('.legend-large').css({
        'width': largeDiameter.toFixed(),
        'height': largeDiameter.toFixed()
    });
    // set width and height for small circle and position
    $('.legend-small').css({
        'width': smallDiameter.toFixed(),
        'height': smallDiameter.toFixed(),
        'top': largeDiameter - smallDiameter,
        'left': smallDiameter / 2
    })

    // label the max and median value
    $(".legend-large-label").html(maxValue.toLocaleString());
    $(".legend-small-label").html((maxValue / 2).toLocaleString());

    // adjust the position of the large based on size of circle
    $(".legend-large-label").css({
        'top': -11,
        'left': largeDiameter + 30,
    });

    // adjust the position of the large based on size of circle
    $(".legend-small-label").css({
        'top': smallDiameter - 11,
        'left': largeDiameter + 30
    });

    // insert a couple hr elements and use to connect value label to top of each circle
    $("<hr class='large'>").insertBefore(".legend-large-label")
    $("<hr class='small'>").insertBefore(".legend-small-label").css('top', largeDiameter - smallDiameter - 8);

}