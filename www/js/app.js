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

angular.module('Guardian', ['ionic', 'ngCordova', 'ngResource', 'ionic.service.core', 'ionic.service.push', 'Guardian.controllers', 'Guardian.services'])

// declare global constants
.constant('ServerUrl', 'http://72d6ac55.ngrok.com') // put ngrok server here

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicAppProvider){

  // Identify app
  $ionicAppProvider.identify({
    // The App ID for the server
    app_id: '9eac5d56',
    // The API key all services will use for this app
    api_key: '031a4ef737a980c085e25aa8d325051cf75aa89a0d0dca75'
  });

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

.run(function($rootScope, $ionicPlatform, $ionicUser, $ionicPush) {
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

  $ionicPush.register({
    canShowAlert: false, //Should new pushes show an alert on your screen?
    canSetBadge: true, //Should new pushes be allowed to update app icon badges?
    canPlaySound: false, //Should notifications be allowed to play a sound?
    canRunActionsOnWake: true, // Whether to run auto actions outside the app,
    onNotification: function(notification) {
      // Called for each notification.
    }
  }, {
    user_id: 'ionic101',
    username: 'ionitron',
    age: 9001
  });

  $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    console.log('Got token', data.token, data.platform);
    // Do something with the token
  });
});

// declare controllers module
angular.module('Guardian.controllers', []);

// declare services module
angular.module('Guardian.services', []);
