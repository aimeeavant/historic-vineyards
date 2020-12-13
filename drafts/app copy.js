
//LAYERS
//In MAP 672 we created separate layers for different types of power plants from the same GeoJSON data structure by filtering the coal plants from the hydro plants. 


// create object to hold legend titles
// accessed in addLegend() function
const labels = {
    "cabernet_sauvignon": "Cabernet Sauvignon",
    "chardonnay": "Chardonnay",
    "gewurztraminer": "Gew&uuml;rztraminer",
    "merlot": "Merlot",
    "pinot_gris": "Pinot Gris (Pinot Grigio)",
    "pinot_noir": "Pinot Noir",
    "riesling": "Riesling",
    "sauvignon_blanc": "Sauvignon Blanc",
    "syrah": "Syrah",
    "zinfandel": "Zinfandel"
}



const cabernet_sauvignon = {
    "type": "FeatureCollection",
    "name": "GrapeAcreData-cabernet_sauvignon-v12",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6001, "County": "Alameda", "squarekm": 1914.046, "squaremi": 739.017, "Latitude": 37.648, "Longitude": -121.913, "1971": 16, "1981": 39, "1991": 223, "2001": 344, "2011": 879, "2019": 974, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.913, 37.648 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6003, "County": "Alpine", "squarekm": 1912.272, "squaremi": 738.332, "Latitude": 38.618, "Longitude": -119.799, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 0, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -119.799, 38.618 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6005, "County": "Amador", "squarekm": 1539.963, "squaremi": 594.583, "Latitude": 38.444, "Longitude": -120.654, "1971": 9, "1981": 62, "1991": 40, "2001": 83, "2011": 201, "2019": 313, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.654, 38.444 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6007, "County": "Butte", "squarekm": 4238.423, "squaremi": 1636.464, "Latitude": 39.666, "Longitude": -121.602, "1971": 0, "1981": 337, "1991": 65, "2001": 66, "2011": 72, "2019": 45, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.602, 39.666 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6009, "County": "Calaveras", "squarekm": 2641.82, "squaremi": 1020.012, "Latitude": 38.188, "Longitude": -120.555, "1971": 0, "1981": 9, "1991": 26, "2001": 99, "2011": 99, "2019": 101, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.555, 38.188 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6011, "County": "Colusa", "squarekm": 2980.379, "squaremi": 1150.731, "Latitude": 39.178, "Longitude": -122.238, "1971": 0, "1981": 0, "1991": 55, "2001": 20, "2011": 80, "2019": 81, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.238, 39.178 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6013, "County": "Contra Costa", "squarekm": 1854.269, "squaremi": 715.937, "Latitude": 37.919, "Longitude": -121.952, "1971": 0, "1981": 0, "1991": 18, "2001": 12, "2011": 32, "2019": 45, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.952, 37.919 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6015, "County": "Del Norte", "squarekm": 2606.494, "squaremi": 1006.373, "Latitude": 41.75, "Longitude": -123.981, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 0, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -123.981, 41.75 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6017, "County": "El Dorado", "squarekm": 4423.397, "squaremi": 1707.883, "Latitude": 38.786, "Longitude": -120.534, "1971": 1, "1981": 32, "1991": 65, "2001": 224, "2011": 274, "2019": 328, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.534, 38.786 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6019, "County": "Fresno", "squarekm": 15431.126, "squaremi": 5957.991, "Latitude": 36.761, "Longitude": -119.655, "1971": 10, "1981": 59, "1991": 27, "2001": 1629, "2011": 1401, "2019": 1109, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -119.655, 36.761 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6021, "County": "Glenn", "squarekm": 3403.107, "squaremi": 1313.947, "Latitude": 39.603, "Longitude": -122.402, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 4, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.402, 39.603 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6023, "County": "Humboldt", "squarekm": 9241.045, "squaremi": 3567.987, "Latitude": 40.707, "Longitude": -123.926, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 21, "2019": 17, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -123.926, 40.707 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6025, "County": "Imperial", "squarekm": 10817.353, "squaremi": 4176.603, "Latitude": 33.041, "Longitude": -115.355, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 0, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -115.355, 33.041 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6027, "County": "Inyo", "squarekm": 26368.354, "squaremi": 10180.879, "Latitude": 36.562, "Longitude": -117.404, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 0, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -117.404, 36.562 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6029, "County": "Kern", "squarekm": 21061.565, "squaremi": 8131.916, "Latitude": 35.347, "Longitude": -118.73, "1971": 91, "1981": 713, "1991": 860, "2001": 2023, "2011": 1690, "2019": 1322, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -118.73, 35.347 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6031, "County": "Kings", "squarekm": 3598.582, "squaremi": 1389.42, "Latitude": 36.072, "Longitude": -119.816, "1971": 0, "1981": 0, "1991": 37, "2001": 115, "2011": 38, "2019": 38, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -119.816, 36.072 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6033, "County": "Lake", "squarekm": 3254.228, "squaremi": 1256.464, "Latitude": 39.095, "Longitude": -122.747, "1971": 232, "1981": 1103, "1991": 1229, "2001": 2855, "2011": 3113, "2019": 4829, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.747, 39.095 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6035, "County": "Lassen", "squarekm": 11761.612, "squaremi": 4541.184, "Latitude": 40.721, "Longitude": -120.63, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 0, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.63, 40.721 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6037, "County": "Los Angeles", "squarekm": 10509.87, "squaremi": 4057.884, "Latitude": 34.196, "Longitude": -118.262, "1971": 0, "1981": 0, "1991": 0, "2001": 31, "2011": 54, "2019": 64, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -118.262, 34.196 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6039, "County": "Madera", "squarekm": 5534.983, "squaremi": 2137.069, "Latitude": 37.21, "Longitude": -119.75, "1971": 0, "1981": 20, "1991": 119, "2001": 2546, "2011": 3195, "2019": 3379, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -119.75, 37.21 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6041, "County": "Marin", "squarekm": 1347.586, "squaremi": 520.306, "Latitude": 38.052, "Longitude": -122.746, "1971": 0, "1981": 12, "1991": 9, "2001": 13, "2011": 4, "2019": 7, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.746, 38.052 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6043, "County": "Mariposa", "squarekm": 3752.417, "squaremi": 1448.816, "Latitude": 37.57, "Longitude": -119.913, "1971": 0, "1981": 0, "1991": 1, "2001": 8, "2011": 16, "2019": 20, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -119.913, 37.57 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6045, "County": "Mendocino", "squarekm": 9081.386, "squaremi": 3506.343, "Latitude": 39.432, "Longitude": -123.443, "1971": 350, "1981": 928, "1991": 1389, "2001": 2418, "2011": 2442, "2019": 3271, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -123.443, 39.432 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6047, "County": "Merced", "squarekm": 5011.555, "squaremi": 1934.972, "Latitude": 37.195, "Longitude": -120.723, "1971": 43, "1981": 112, "1991": 164, "2001": 949, "2011": 1591, "2019": 1847, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.723, 37.195 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6049, "County": "Modoc", "squarekm": 10146.977, "squaremi": 3917.77, "Latitude": 41.593, "Longitude": -120.718, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 0, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.718, 41.593 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6051, "County": "Mono", "squarekm": 7896.827, "squaremi": 3048.982, "Latitude": 37.916, "Longitude": -118.875, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 0, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -118.875, 37.916 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6053, "County": "Monterey", "squarekm": 8496.703, "squaremi": 3280.595, "Latitude": 36.24, "Longitude": -121.316, "1971": 1345, "1981": 4212, "1991": 3691, "2001": 5478, "2011": 4389, "2019": 5122, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.316, 36.24 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6055, "County": "Napa", "squarekm": 1938.247, "squaremi": 748.362, "Latitude": 38.507, "Longitude": -122.326, "1971": 2684, "1981": 5463, "1991": 9768, "2001": 15680, "2011": 19477, "2019": 21943, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.326, 38.507 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6057, "County": "Nevada", "squarekm": 2480.617, "squaremi": 957.772, "Latitude": 39.295, "Longitude": -120.773, "1971": 0, "1981": 3, "1991": 24, "2001": 104, "2011": 96, "2019": 172, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.773, 39.295 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6059, "County": "Orange", "squarekm": 2047.561, "squaremi": 790.568, "Latitude": 33.676, "Longitude": -117.777, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 1, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -117.777, 33.676 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6061, "County": "Placer", "squarekm": 3644.136, "squaremi": 1407.009, "Latitude": 39.062, "Longitude": -120.723, "1971": 0, "1981": 5, "1991": 0, "2001": 3, "2011": 4, "2019": 12, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.723, 39.062 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6063, "County": "Plumas", "squarekm": 6612.351, "squaremi": 2553.043, "Latitude": 39.995, "Longitude": -120.83, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 0, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.83, 39.995 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6065, "County": "Riverside", "squarekm": 18664.697, "squaremi": 7206.48, "Latitude": 33.73, "Longitude": -116.002, "1971": 72, "1981": 211, "1991": 99, "2001": 201, "2011": 188, "2019": 205, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -116.002, 33.73 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6067, "County": "Sacramento", "squarekm": 2498.416, "squaremi": 964.644, "Latitude": 38.45, "Longitude": -121.34, "1971": 7, "1981": 520, "1991": 1076, "2001": 3406, "2011": 3280, "2019": 4858, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.34, 38.45 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6069, "County": "San Benito", "squarekm": 3596.742, "squaremi": 1388.71, "Latitude": 36.611, "Longitude": -121.085, "1971": 530, "1981": 509, "1991": 295, "2001": 672, "2011": 198, "2019": 416, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.085, 36.611 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6071, "County": "San Bernardino", "squarekm": 51947.23, "squaremi": 20056.938, "Latitude": 34.857, "Longitude": -116.181, "1971": 0, "1981": 0, "1991": 0, "2001": 2, "2011": 2, "2019": 4, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -116.181, 34.857 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6073, "County": "San Diego", "squarekm": 10895.121, "squaremi": 4206.63, "Latitude": 33.024, "Longitude": -116.776, "1971": 0, "1981": 0, "1991": 5, "2001": 6, "2011": 35, "2019": 162, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -116.776, 33.024 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6075, "County": "San Francisco", "squarekm": 121.4, "squaremi": 46.873, "Latitude": 37.778, "Longitude": -122.416, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 0, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.416, 37.778 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6077, "County": "San Joaquin", "squarekm": 3603.506, "squaremi": 1391.322, "Latitude": 37.935, "Longitude": -121.272, "1971": 122, "1981": 722, "1991": 3343, "2001": 11837, "2011": 11313, "2019": 12491, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.272, 37.935 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6079, "County": "San Luis Obispo", "squarekm": 8543.248, "squaremi": 3298.567, "Latitude": 35.385, "Longitude": -120.448, "1971": 65, "1981": 942, "1991": 2572, "2001": 7147, "2011": 9824, "2019": 15075, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.448, 35.385 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6081, "County": "San Mateo", "squarekm": 1161.372, "squaremi": 448.408, "Latitude": 37.415, "Longitude": -122.372, "1971": 5, "1981": 4, "1991": 12, "2001": 5, "2011": 6, "2019": 6, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.372, 37.415 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6083, "County": "Santa Barbara", "squarekm": 7083.838, "squaremi": 2735.085, "Latitude": 34.537, "Longitude": -120.038, "1971": 151, "1981": 1029, "1991": 773, "2001": 1204, "2011": 724, "2019": 863, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.038, 34.537 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6085, "County": "Santa Clara", "squarekm": 3341.343, "squaremi": 1290.1, "Latitude": 37.221, "Longitude": -121.691, "1971": 98, "1981": 203, "1991": 153, "2001": 264, "2011": 361, "2019": 367, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.691, 37.221 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6087, "County": "Santa Cruz", "squarekm": 1152.986, "squaremi": 445.17, "Latitude": 37.012, "Longitude": -122.007, "1971": 8, "1981": 12, "1991": 4, "2001": 24, "2011": 12, "2019": 14, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.007, 37.012 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6089, "County": "Shasta", "squarekm": 9778.247, "squaremi": 3775.402, "Latitude": 40.761, "Longitude": -122.044, "1971": 0, "1981": 5, "1991": 5, "2001": 0, "2011": 9, "2019": 12, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.044, 40.761 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6091, "County": "Sierra", "squarekm": 2468.814, "squaremi": 953.214, "Latitude": 39.577, "Longitude": -120.522, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 0, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -120.522, 39.577 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6093, "County": "Siskiyou", "squarekm": 16259.652, "squaremi": 6277.887, "Latitude": 41.588, "Longitude": -122.533, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 2, "2019": 1, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.533, 41.588 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6095, "County": "Solano", "squarekm": 2128.361, "squaremi": 821.765, "Latitude": 38.267, "Longitude": -121.94, "1971": 74, "1981": 234, "1991": 238, "2001": 497, "2011": 350, "2019": 411, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.94, 38.267 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6097, "County": "Sonoma", "squarekm": 4081.43, "squaremi": 1575.849, "Latitude": 38.533, "Longitude": -122.945, "1971": 1628, "1981": 4551, "1991": 6638, "2001": 11374, "2011": 11496, "2019": 12620, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.945, 38.533 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6099, "County": "Stanislaus", "squarekm": 3871.583, "squaremi": 1494.827, "Latitude": 37.562, "Longitude": -121.003, "1971": 40, "1981": 203, "1991": 458, "2001": 1120, "2011": 1044, "2019": 1101, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.003, 37.562 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6101, "County": "Sutter", "squarekm": 1560.236, "squaremi": 602.41, "Latitude": 39.035, "Longitude": -121.703, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 0, "2019": 1, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.703, 39.035 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6103, "County": "Tehama", "squarekm": 7639.71, "squaremi": 2949.709, "Latitude": 40.126, "Longitude": -122.232, "1971": 0, "1981": 27, "1991": 30, "2001": 0, "2011": 4, "2019": 6, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -122.232, 40.126 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6105, "County": "Trinity", "squarekm": 8234.23, "squaremi": 3179.254, "Latitude": 40.648, "Longitude": -123.114, "1971": 0, "1981": 0, "1991": 0, "2001": 10, "2011": 5, "2019": 1, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -123.114, 40.648 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6107, "County": "Tulare", "squarekm": 12494.658, "squaremi": 4824.215, "Latitude": 36.23, "Longitude": -118.781, "1971": 0, "1981": 43, "1991": 305, "2001": 892, "2011": 702, "2019": 537, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -118.781, 36.23 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6109, "County": "Tuolumne", "squarekm": 5752.063, "squaremi": 2220.884, "Latitude": 38.021, "Longitude": -119.965, "1971": 0, "1981": 0, "1991": 0, "2001": 0, "2011": 6, "2019": 7, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -119.965, 38.021 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6111, "County": "Ventura", "squarekm": 4773.692, "squaremi": 1843.133, "Latitude": 34.359, "Longitude": -119.133, "1971": 0, "1981": 1, "1991": 0, "2001": 0, "2011": 3, "2019": 7, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -119.133, 34.359 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6113, "County": "Yolo", "squarekm": 2628.032, "squaremi": 1014.689, "Latitude": 38.679, "Longitude": -121.903, "1971": 35, "1981": 41, "1991": 206, "2001": 482, "2011": 535, "2019": 635, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.903, 38.679 ] } },
    { "type": "Feature", "properties": { "State": "CA", "FIPS": 6115, "County": "Yuba", "squarekm": 1636.454, "squaremi": 631.839, "Latitude": 39.27, "Longitude": -121.344, "1971": 0, "1981": 130, "1991": 154, "2001": 122, "2011": 21, "2019": 14, "Grape": "cabernet_sauvignon" }, "geometry": { "type": "Point", "coordinates": [ -121.344, 39.27 ] } }
    ]
    }
    
    
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