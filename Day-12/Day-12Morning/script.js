var app = angular.module("TodoApp",[]);

app.controller("MainCtrl", function($scope){
	$scope.newItem="";
	$scope.items=[];

	$scope.addItem = function(){
		console.log($scope.newItem);
		$scope.items.push($scope.newItem);
		$scope.newItem = "";
	}
	$scope.remove = function() { 
  $scope.items.splice($scope.newItem, 1);     
}
});