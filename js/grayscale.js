/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

hash="";


// test all possible places hash could be on different browsers
if(window.location.hash){
    hash = window.location.hash;
} else if (document.location.hash){
    hash = document.location.hash;
} else if (location.hash){
    hash = location.hash;
}


// some browsers start the hash with #, remove it for consistency
if(hash.substring(0,1) == '#'){
    hash = hash.substring(1,hash.length);
}

if(hash = 'pageA'){
    document.getElementById('tagLine').innerHTML = 'pageA';
    document.getElementById('aboutPara1').innerHTML = 'pageA';
    document.getElementById('aboutPara2').innerHTML = 'pageA';
    document.getElementById('morePara').innerHTML = 'pageA';
    document.getElementById('examplePara1').innerHTML = 'pageA';
    document.getElementById('examplePara2').innerHTML = 'pageA';
    document.getElementById('examplePara3').innerHTML = 'pageA';
    document.getElementById('examplePara4').innerHTML = 'pageA';
    document.getElementById('examplePara5').innerHTML = 'pageA';
    document.getElementById('bridgeItem1').innerHTML = 'pageA';
    document.getElementById('bridgeItem2').innerHTML = 'pageA';
    document.getElementById('bridgeItem3').innerHTML = 'pageA';
    document.getElementById('bridgeItem4').innerHTML = 'pageA';
    document.getElementById('bridgeItem5').innerHTML = 'pageA';
    document.getElementById('bridgeItem6').innerHTML = 'pageA';
    document.getElementById('bridgeItem7').innerHTML = 'pageA';
}

if(hash = 'pageB'){
    document.getElementById('tagLine').innerHTML = 'content for the page displayed when the hash is pageB';
}

copytext =     document.getElementById('examplePara1').innerHTML + "\n" +
    document.getElementById('examplePara2').innerHTML  + "\n" +
    document.getElementById('examplePara3').innerHTML  + "\n" +
    document.getElementById('examplePara4').innerHTML  + "\n" +
    document.getElementById('examplePara5').innerHTML;

$('#mainClick').on('click', function() {
    ga('send', 'event', 'mainClick', 'click', 'nav-buttons');
});


$('#aboutClick').on('click', function() {
    ga('send', 'event', 'aboutClick', 'click', 'nav-buttons');
});

$('#aboutClick').on('click', function() {
    ga('send', 'event', 'moreClick', 'click', 'nav-buttons');
});


$('#exampleClick').on('click', function() {
    ga('send', 'event', 'moreClick', 'click', 'nav-buttons');
});

$('#copyToClipboard').on('click', function() {
    ga('send', 'event', 'copyToClipboard', 'click', 'nav-buttons');
});

$('#Love').on('click', function() {
    ga('send', 'event', 'Love', 'click', 'nav-buttons');
});


$('#Hate').on('click', function() {
    ga('send', 'event', 'Hate', 'click', 'nav-buttons');
});


$('#twitter').on('click', function() {
    ga('send', 'event', 'twitter', 'click', 'nav-buttons');
});


$('#facebook').on('click', function() {
    ga('send', 'event', 'facebook', 'click', 'nav-buttons');
});

function copyToClipboard() {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", copytext);
}

function replaceLove(){
    document.getElementById('loveHate').innerHTML = "<p>Thank you!</p>";    
}

function replaceHate(){
    document.getElementById('loveHate').innerHTML = "<p></p>";    
}
