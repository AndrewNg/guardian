angular.module('Guardian.services')

.factory('UsersService', function ($resource, ServerUrl) {
  return data = $resource(ServerUrl + '/users/:id', {id: '@id', format: 'json'}, {
    query       : { method: 'GET', isArray: true },
  });
});