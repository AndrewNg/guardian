angular.module('Guardian.services')

.factory('UsersService', function ($resource, ServerUrl) {
  return data = $resource(ServerUrl + '/users/:id', {id: '@id', format: 'json'}, {
    get   : { method: 'GET', isArray: false}
  });
});