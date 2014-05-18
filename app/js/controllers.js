'use strict';

/* Controllers */

angular.module('klasroom.controllers', ['ngCookies'])
  .controller('HomeController', ['$scope', '$cookieStore', function($scope, $cookieStore) {

	$scope.c1Name = $cookieStore.get('c1Name') || 'Academic ability',
	$scope.c2Name = $cookieStore.get('c2Name') || 'English-speaking level',
	$scope.c3Name = $cookieStore.get('c3Name') || 'Willingness to help others',
	$scope.c4Name = $cookieStore.get('c4Name') || 'Another criterium?',
	$scope.nbTables = $cookieStore.get('nbTables') || '',

	$scope.students = $cookieStore.get('students') || [];

	$scope.tables = [];

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

	$scope.save = function() {
		$cookieStore.put('c1Name', $scope.c1Name);
		$cookieStore.put('c2Name', $scope.c2Name);
		$cookieStore.put('c3Name', $scope.c3Name);
		$cookieStore.put('c4Name', $scope.c4Name);
		$cookieStore.put('nbTables', $scope.nbTables);
		$cookieStore.put('students', $scope.students);
		alert("Your data is saved! You'll find it back in this browser until you hit save again.");
	}

	$scope.resetAll = function() {
		if(confirm("You'll have to start over; are you ok with that?")) {
			$scope.students = [];
			$scope.c1Name = 'Academic ability';
			$scope.c2Name = 'English-speaking level';
			$scope.c3Name = 'Willingness to help others';
			$scope.c4Name = 'Another criterium?';
			$scope.nbTables = '';
		}
	}

	$scope.generateArrangement = function() {
		$scope.tables = [];
		// cloning the students array
		var students = $scope.students.slice(0);

		// sorting students from best to worst as per the criteria
		students.sort(function(s1, s2){
			if (s1.c1 < s2.c1) return 1;
			else if (s1.c1 > s2.c1) return -1;
			else if (s1.c2 < s2.c2) return 1;
			else if (s1.c2 > s2.c2) return -1;
			else if (s1.c3 < s2.c3) return 1;
			else if (s1.c3 > s2.c3) return -1;
			else if (s1.c4 < s2.c4) return 1;
			else if (s1.c4 > s2.c4) return -1;
			else return 0;
		});

		// pairing together best + worst, second best + second worst, etc.
		var cursorStart = 0, cursorEnd = students.length-1, pairs = [];
		while(cursorStart <= cursorEnd) {
			if (cursorStart == cursorEnd) pairs.push([students[cursorStart]]);
			else pairs.push([students[cursorStart], students[cursorEnd]]);
			cursorStart++;
			cursorEnd--;
		}

		// as long as not enough table, pairing most similar / most dissimilar groups
		while ($scope.tables.length + pairs.length > $scope.nbTables && pairs.length > 1) {
			var mostSimilar = pairs.pop();
			var mostDissimilar = pairs.shift();
			$scope.tables.push(jQuery.merge(mostSimilar, mostDissimilar));
		}
		jQuery.merge($scope.tables, pairs);

		if ($scope.tables.length != $scope.nbTables) alert("Klasroom doesn't support tables of more than 4 people for now; request the feature of you need it!");
	}

  }])
