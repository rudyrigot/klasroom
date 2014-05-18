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
  $routeProvider.when('/criteria', {templateUrl: 'partials/criteria.html', controller: 'CriteriaController'});
  $routeProvider.when('/students', {templateUrl: 'partials/students.html', controller: 'StudentsController'});
  $routeProvider.when('/generate', {templateUrl: 'partials/generate.html', controller: 'GenerateController'});
  $routeProvider.otherwise({redirectTo: '/criteria'});
}]);
