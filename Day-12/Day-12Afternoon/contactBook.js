var app = angular.module("formApp", []);

app.controller("formCtrl", function($scope){

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