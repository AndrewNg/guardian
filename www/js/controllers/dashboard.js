angular.module('Guardian.controllers')

.controller('DashboardController', function($scope, GeolocationService){

  $scope.testText = "test scope";

  GeolocationService.watch();

});

