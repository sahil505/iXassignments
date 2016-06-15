var app = angular.module("formApp", []);

app.controller("formCtrl", function($scope){

	$scope.input1 = $scope.input2 = $scope.input3 = $scope.input4 = $scope.input5 = "";

	$scope.checkInputs = function () {
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if ($scope.input1 !== "" && $scope.input2.match(phoneno) && $scope.input3.match(email_format) && 
			$scope.input4.length>=6 && $scope.input4 === $scope.input5) {
			console.log("ok");
		$scope.checkInputs = false;
		$scope.next = "Welcome, Sahil!";
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
	}
}
});