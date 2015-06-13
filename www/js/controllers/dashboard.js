angular.module('Guardian.controllers')

.controller('DashboardController', function($scope, GeolocationService){
  GeolocationService.watch();



});

