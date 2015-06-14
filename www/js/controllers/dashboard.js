angular.module('Guardian.controllers')

.controller('DashboardController', function($scope, GeolocationService, UsersService){
  $scope.testText = "Hi";

  $scope.getUser = function() {
    UsersService.query()
    .$promise.then(function(data) {
       $scope.users = data;
       console.log($scope.users);
    });
  }

  //GeolocationService.watch();

});

