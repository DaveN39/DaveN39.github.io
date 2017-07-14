"use strict";
(function () {

	var mapElement
 		// Set our map options
        var mapOptions1 = {
            // Set the zoom level
            zoom: 10,

            // This sets the center of the map at our location
            center: {
                lat:  29.4267857,
                lng: -98.4917651
            }
        };
        var map1 = new google.maps.Map(document.getElementById("map-canvas1"), mapOptions1);
        var geocoder = new google.maps.Geocoder();

//      // Geocode our address
        geocoder.geocode({ "address": "600 Navarro St. San Antonio Tx 78205" }, function(results, status) {

        var codeup = { lat: 29.4267857, lng: -98.4917651};
        console.log("Geocoding finished!");
        console.log(results, status);

//          // Check for a successful result
        if (status == google.maps.GeocoderStatus.OK) {

//        // Recenter the map over the address
        map1.setCenter(results[0].geometry.location);
   
        } 
        else {
//      // Show an error message with the status if our request fails
        alert("Geocoding was not successful - STATUS: " + status);
        }
        });

        console.log("this code comes after geocoding request!");

})();