var app = angular.module("RouterApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "./formValidator.html"
  })
  $routeProvider.when("/book", {
    templateUrl: "./contactBook.html"
  })
});
app.controller("formCtrl", function($scope){

	$scope.input1 = $scope.input2 = $scope.input3 = $scope.input4 = $scope.input5 = "";

	$scope.checkInputs = function () {
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if ($scope.input1 !== "" && $scope.input2.match(phoneno) && $scope.input3.match(email_format) && 
			$scope.input4.length>=6 && $scope.input4 === $scope.input5) {
			console.log("ok");
		$scope.xyz = "book";
	}
	else {
		console.log("not ok");
		if ($scope.input1 === "") {
			$scope.error1 = "Type a valid name";
		}
		if ($scope.input2.match(phoneno) === null) {
			$scope.error2 = "Type a valid number";
		}
		if ($scope.input3.match(email_format) === null) {
			$scope.error3 = "Type a valid email address";
		}
		if ($scope.input4.length < 6) {
			$scope.error4 = "Type a valid password";
		}
		if ($scope.input4 !== $scope.input5) {
			$scope.error4 = "Your passwords does not match!!";
		}
		$scope.xyz = "";
	}
}
});

app.controller("contactCtrl", function($scope){

	$scope.input1 = $scope.input2 = "";
	$scope.items =[];

	$scope.checkInputs = function () {
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if ($scope.input1 !== "" && $scope.input2.match(phoneno)) {
			console.log("ok");

			$scope.addItem = function(){
				var one = $scope.input1;
				var two = $scope.input2;
				$scope.items.push(one + ":" + two);
				$scope.input1 = "";
				$scope.input2 = "";
			}
		}

		else {
			console.log("not ok");
			if ($scope.input1 === "") {
				$scope.error1 = "Type a valid name";
			}
			if ($scope.input2.match(phoneno) === null) {
				$scope.error2 = "Type a valid number";
			}
			$scope.input1 = "";
			$scope.input2 = "";
		}
	}
	$scope.remove = function() { 
  $scope.items.splice($scope.newItem, 1);     
}

});