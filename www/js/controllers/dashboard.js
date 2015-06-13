angular.module('Guardian.controllers')

.controller('DashboardController', function($scope, GeolocationService, UsersService){

  $scope.testText = "test scope";

  GeolocationService.watch();

});

