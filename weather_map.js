"use strict";
(function() {
                var requestWeather = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
                APPID: "7f8e3aa0aad113510e0c1eaafd1c17b8" , 
                id: 4726206 ,
                units: "imperial",
                cnt: 3
                });

                requestWeather.done(function(data, status, request) {
                    console.log(data);
                    console.log(data.list[0].temp.max)
                    var htmlString = "";
                
                    
                    data.list.forEach(function(forecast) {
                        var date = new Date(forecast.dt * 1000);
                        var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        var day = daysOfWeek[date.getDay()];
                        console.log(date);
                        htmlString += "<div class='col-sm-4 day'>";
                        htmlString += "<h4>" + day + "<br>" + "Morning Temp: " + forecast.temp.day + "   Humidity: " + forecast.humidity + "</h4><br>";
                        htmlString += "<h4>" + " Evening Temp: " + forecast.temp.night + "   Clouds: " + forecast.clouds + "</h4><br>";
                        htmlString += "<h4>" + " High Temp: " + forecast.temp.max + "   Rain: " + forecast.rain + "</h4><br>";
                        htmlString += "<h4>" + " Low Temp: " + forecast.temp.min + "   Wind: " + forecast.speed + "</h4><br>";
                        htmlString += "</div>";
                    });
                    $("#insertWeather").append(htmlString);
                });
         })();

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