function retrieveInfo(boysLayer, currentGrade) {
    // ** Need only one layer because both layers have the same data **
    // On mouseover, show info window
    // Access CSV properties by currently selected grade level
    // Populate info window with properties
    // Create array of school enrollment by grade and gender and draw sparkline
    // Detect location of mouse and offset window based on proximity to viewport
    /* 
      select the element and reference with variable
      since boysLayer is on top of girlsLayer, use it to detect mouseover events
      remove the none class to display the element
      derive the properties of the target layer
      populate our info window HTML elements with the relevant information (using jQuery to select these elements)
      change the appearance of the target circleMarker as an additional affordance
    
    
      Within the callback function of the mouseover, we'll first access the properties of that specific feature using the event passed to the callback function (e) and create a shortcut to those properties assigned to the variable props. We can then select our infoWindow div using jQuery and display it (using jQuery to remove the none class and the jQuery method .show()).
    
     */

    // select the element and reference with variable
    // and hide it from view initially
    const info = $('#info').hide();

    // ** mouseover **
    // since boysLayer is on top, use to detect mouseover events
    boysLayer.on('mouseover', function (e) {

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
        const girlsValues = [];
        const boysValues = [];

        // loop through the grade levels and push values into those arrays
        for (let i = 1; i <= 8; i++) {
            girlsValues.push(props['G' + i]);
            boysValues.push(props['B' + i]);
        }
        console.log(girlsValues);
        $('.girlspark').sparkline(girlsValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: '#D98939 ',
            spotRadius: 0,
            lineWidth: .5
        });

        $('.boyspark').sparkline(boysValues, {
            width: '210px',
            height: '30px',
            lineColor: '#000000',
            fillColor: 'rgb(124, 188, 72, 0.5)',
            spotRadius: 0,
            lineWidth: .5
        });


    })

    // ** mouseout
    // hide the info panel when mousing off layergroup and remove affordance opacity
    boysLayer.on('mouseout', function (e) {

        // hide the info panel
        info.hide();

        // reset the layer style
        e.layer.setStyle({
            fillOpacity: 0
        });
    });

    //** mousemove
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





}