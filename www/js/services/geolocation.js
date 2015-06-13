angular.module('Guardian.services')

.factory('GeolocationService', function($cordovaGeolocation){

  var watchLocation = function(){
    var watchOptions = {
      frequency : 1000,
      timeout : 3000,
      enableHighAccuracy: false // may cause errors if true
    };

    var watch = $cordovaGeolocation.watchPosition(watchOptions);
    watch.then(
      null,
      function(err) {
        // error
      },
      function(position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat);
        console.log(long);
    });
  }

  return {
    watch: watchLocation
  }

});
