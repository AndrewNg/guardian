angular.module('Guardian.controllers')

.controller('DashboardController', function($scope, $ionicModal, GeolocationService, UsersService){
  $scope.testText = "Hi";

  $scope.getUser = function() {
    UsersService.query()
    .$promise.then(function(data) {
       $scope.users = data;
       console.log($scope.users);
    });
  }

  $ionicModal.fromTemplateUrl('templates/addmember.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.addMemberModal = modal;
  });

  $scope.addMember = function(){
    $scope.addMemberModal.show();
  }

  $scope.closeModal = function(){
    $scope.addMemberModal.hide();
  }

  //GeolocationService.watch();

});

