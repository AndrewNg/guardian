angular.module('Guardian.services')

.factory('GeolocationService', function(){

  var watchLocation = function(){
    document.addEventListener("deviceready", function () {
      function onSuccess(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      }

      // onError Callback receives a PositionError object
      function onError(error) {
          alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
      }

      var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
    }, false);
  }

  return {
    watch: watchLocation
  }

});
