angular.module('Guardian.services')

.factory('UsersService', function ($resource, ServerUrl) {
  return data = $resource(ServerUrl + '/users', {format: 'json'}, {
    query : {method: 'GET', isArray: true},
    get   : { method: 'GET', params:{id: '@id'}, isArray: false}
  });
});