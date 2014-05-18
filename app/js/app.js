'use strict';


// Declare app level module which depends on filters, and services
angular.module('klasroom', [
  'ngRoute',
  'klasroom.filters',
  'klasroom.services',
  'klasroom.directives',
  'klasroom.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
