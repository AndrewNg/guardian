angular.module('Guardian.controllers')

.controller('DashboardController', function($scope, GeolocationService, UsersService){
  $scope.getUser = function() {
    UsersService.get({id: 1})
    .$promise.then(function(data) {
      console.log(data);
      console.log("connected with your backend ;)")
      $scope.testText = data.name + " connected with your backend ;)";
    });
  }

  //GeolocationService.watch();

});

