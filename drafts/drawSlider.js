function drawSlider(girlsLayer, boysLayer) {
    // Create Leaflet control for the slider
    // Select the slider's input and listen for change
    // Resize the circles with updated grade level
console.log("slider function")
    // called from drawMap()

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

            // current value of slider is current grade level
            var currentGrade = this.value;

            // resize the circles with updated grade level
            resizeCircles(girlsLayer, boysLayer, currentGrade);

            // update heading
            $('#slider h3 span').html(currentGrade);


        });

}