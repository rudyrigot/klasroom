'use strict';

/* Controllers */

angular.module('klasroom.controllers', [])
	.controller('CriteriaController', ['$scope', 'save', 'init', 'reset', function($scope, save, init, reset){
		init($scope);
		$scope.save = function() {
			save($scope);
		}
		$scope.reset = function() {
			reset($scope);
		}
	}])
	.controller('StudentsController', ['$scope', 'save', 'init', 'reset', function($scope, save, init, reset){
		init($scope);
		$scope.save = function() {
			save($scope);
		}
		$scope.reset = function() {
			reset($scope);
		}

		$scope.addStudent = function() {
			if($scope.newStudentName) {
				$scope.students.push({
					name: $scope.newStudentName,
					c1: $scope.newStudentC1 ? parseInt($scope.newStudentC1) : 1,
					c2: $scope.newStudentC2 ? parseInt($scope.newStudentC2) : 1,
					c3: $scope.newStudentC3 ? parseInt($scope.newStudentC3) : 1,
					c4: $scope.newStudentC4 ? parseInt($scope.newStudentC4) : 1
				});
				$scope.newStudentName = $scope.newStudentC1 = $scope.newStudentC2 = $scope.newStudentC3 = $scope.newStudentC4 = '';
			}
		}

		$scope.removeStudent = function(index) {
			console.log($scope.students[index]);
			$scope.students.splice(index, 1);
		}
	}])
	.controller('GenerateController', ['$scope', 'save', 'init', 'reset', 'generateArrangement', function($scope, save, init, reset, generateArrangement){
		init($scope);
		generateArrangement($scope);
		$scope.save = function() {
			save($scope);
		}
		$scope.reset = function() {
			reset($scope);
		}

		$scope.generateArrangement = function() {
			generateArrangement($scope);
		}

	}])
