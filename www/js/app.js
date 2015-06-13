angular.module('ionic.utils', [])

// create methods to manage localstorage
.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },
    removeObject: function(key){
      $window.localStorage.removeItem(key);
    }
  }
}]);

angular.module('Guardian', ['ionic', 'Guardian.controllers', 'Guardian.services'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider){
  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider
  .state('users', {
    url: '/users',
    templateUrl: 'templates/users.html',
  })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html',
    controller: 'DashboardController'
  });
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

// declare controllers module
angular.module('Guardian.controllers', []);

// declare services module
angular.module('Guardian.services', []);
