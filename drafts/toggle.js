const widthBreak = 500;

// On window resize unset any position properties
$(window).resize(function () {
    const widthWindow = window.innerWidth;
    if (widthWindow <= widthBreak) {
        toggle();
    }
})

function toggle() {

    const e_button = document.getElementById('legend-button');
    const e_toggle = document.getElementById('legend-toggle');

    $('#legend-button').toggleClass("bg-gray-light")
    $('#legend-toggle').toggleClass("w0")
    $('#legend-toggle').toggleClass("hmax0")
    $('#legend-toggle').toggleClass("opacity0")
}