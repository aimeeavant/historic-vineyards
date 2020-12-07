// -------- Add Data / County ------>
var countyLayer = jQuery.getJSON("data/sloCountyBoundary.geojson", function (data) {
    var countyLayer = L.geoJson(data, {
        style: function (feature) {
            return {
                //color: '#5E94AD',
                color: 'MidnightBlue',
                weight: 1,
                fillOpacity: .2,
                fillColor: '#1f78b4'
            };
        }
    }).addTo(map);

    map.fitBounds(countyLayer.getBounds())

});// end of callback function


// -------- Add Data / Vineyards ------>
// Add Data Points
// Add Data Points
var avaLayerYork = jQuery.getJSON("data/sloVineyards-v12.geojson", function (data) {
    var yorkLayer = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            var wineIcon = L.icon({
                iconUrl: 'graphics/bottle-red-wine.png',
                iconSize: [10, 10], // size of the icon
            });

            return L.marker(latlng, { icon: wineIcon })
        },
        onEachFeature: function (feature, layer) {
            var popUpText = `<b>Name:</b> ${feature.properties['Winery or Grower']}<br>
            <b>Established:</b> ${feature.properties.Active}<br>
                <b>Bond Number:</b> ${feature.properties["Bond Number"]} <br>
                    <b>History:</b> ${feature.properties["Historical Significance"]}`
            layer.bindPopup(popUpText);

            layer.on('mouseover', function () {
                var hoverIcon = L.icon({
                    iconUrl: 'graphics/bottle-rose.png',
                    iconSize: [10, 10], // size of the icon
                });
                layer.setIcon(hoverIcon)
            }); // end on mouseover

            layer.on('mouseout', function () {
                var wineIcon = L.icon({
                    iconUrl: 'graphics/bottle-red-wine.png',
                    iconSize: [10, 10], // size of the icon
                });
                layer.setIcon(wineIcon)
            });

        }

    }).addTo(map);

    //console.log(yorkLayer)
});// end of callback function



// drawMap() 
function drawMap(dataLayer) {
    console.log(dataLayer)

    dataLayer.eachLayer(function (layer) {
        var p = layer.feature.properties;
        layer.setStyle({
            fillColor: getColor(p['RENT'], breaks)
        });
        var popUpText = `<b>${p['NAME']} County </b> <br>Median Rent:$${p['RENT']}`
        if (L.Browser.mobile) {
            // if true use popup
            layer.bindPopup(popUpText);
        } else {
            // if false use tooltip
            layer.bindTooltip(popUpText, {
                sticky: true
            })
        }
    });

} // end drawMap() function


