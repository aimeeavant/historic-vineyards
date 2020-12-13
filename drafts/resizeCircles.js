function resizeCircles(csLayer, chLayer, currentYear) {
    // Update girl circle sizes with value selected in slider 
    // Update boy circle sizes with value selected in slider
    // Retrieve data for info window

    // called in drawMap
    // called in sequenceUi

    /* 
    notes
    accepts both our layerGroups and a current grade level.

    radius: calcRadius(feature.properties[year])
     */
    console.log("next id the resize")
    console.log(csLayer)

    csLayer.eachLayer(function (layer) {
        console.log("next id the layer in eachLayer")
        console.log(layer)
        console.log("next id the layer in properties")
        console.log(layer.feature.properties)
        console.log(layer.feature.properties.CS1971)
        let value = layer.feature.properties.CS1971
        const radius = getRadius(value)
        
        layer.setRadius(radius);
    });

 /*    chLayer.eachLayer(function (layer) {
        const radius = calcRadius(layer.feature.properties['CH' + currentYear])
        layer.setRadius(radius);
    }); */

    // update the hover window with current grade's
    retrieveInfo(csLayer, currentYear);

    

}



function getRadius(val) {
	// make sure 0 values are not plotted
	if (val == 0 ) {
		radius == 0;
	} else {
	var radius = Math.sqrt(val / Math.PI);
}
	return radius * .8;
}
