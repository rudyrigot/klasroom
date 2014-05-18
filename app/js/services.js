'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('klasroom.services', ['ngCookies']).
  value('version', '0.1').
  factory('save', ['$cookieStore', function($cookieStore){
  	return function($scope) {
		$cookieStore.put('c1Name', $scope.c1Name);
		$cookieStore.put('c2Name', $scope.c2Name);
		$cookieStore.put('c3Name', $scope.c3Name);
		$cookieStore.put('c4Name', $scope.c4Name);
		$cookieStore.put('nbTables', $scope.nbTables);
		$cookieStore.put('students', $scope.students);
		alert("Your data is saved! You'll find it back in this browser until you hit save again.");
  	}
  }]).
  factory('init', ['$cookieStore', function($cookieStore){
  	return function($scope) {
		$scope.c1Name = $cookieStore.get('c1Name') || 'Academic ability',
		$scope.c2Name = $cookieStore.get('c2Name') || 'English-speaking level',
		$scope.c3Name = $cookieStore.get('c3Name') || 'Willingness to help others',
		$scope.c4Name = $cookieStore.get('c4Name') || 'Another criterium?',
		$scope.nbTables = $cookieStore.get('nbTables') || '',

		$scope.students = $cookieStore.get('students') || [];

		$scope.tables = [];
  	}
  }]);
