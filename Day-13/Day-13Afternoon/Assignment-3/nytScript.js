var app = angular.module("RouterApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "./top.html"
	})
	$routeProvider.when("/search", {
		templateUrl: "./search.html"
	})
});
app.controller("TopCtrl", function($scope, $http) {
	$scope.articles = [];
	$http({
		method: "GET",
		url: "https://api.nytimes.com//svc/search/v2/articlesearch.json" +
		 "?api-key=af618dc34e8f43d5aced617c9762e224"
	}).then(function(response) {
		$scope.articles = response.response.docs[i].headline.main;
		console.log(response.data.results);
	});
});
app.controller("SearchCtrl", function($scope) {
	$scope.searchTerm = "";
	$scope.search = function() {
		console.log("search clicked");
    // Code for search here.
};
});