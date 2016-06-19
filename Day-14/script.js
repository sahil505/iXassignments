var app = angular.module("ChommiesApp", ["ngRoute"]);
var CHOMMIES_TOKEN = "c61c2ba10a06cfd0a03b1571534e8d61";

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/feed.html"
  })
  $routeProvider.when("/me", {
    templateUrl: "templates/me.html"
  })
});


app.controller("FeedCtrl", function($scope, $http) {
  $scope.loadData = function(){
    var url = "http://ixchommies.herokuapp.com/";
    $http({
      method: "GET",
      url: url + "brus",
      params: { token: "c61c2ba10a06cfd0a03b1571534e8d61" }
    }).then(function(response) {
      $scope.brus = response.data;
      console.log("b", $scope.brus);
    });

    $http({
      method: "GET",
      url: url + "props",
      params: { token: "c61c2ba10a06cfd0a03b1571534e8d61" }
    }).then(function(response) {
      $scope.props = response.data;
      console.log("p", $scope.props);
    });

    $scope.addProp = function() {
      console.log($scope.newProp);
      $http({
        method: "POST",
        url: url + "props",
        params: { token: "c61c2ba10a06cfd0a03b1571534e8d61" },
        data: {
          props: $scope.newProp.text,
          for: $scope.newProp.receiver.id,
        }
    }).then(function(response) {
     console.log(response.data);
     $scope.newProp = {};
   }).catch(function(response) {
    $scope.errorMessage = response.data.message;
  });
 }
}
$scope.loadData();  
});

app.controller("MeCtrl", function($scope, $http){
  var url = "http://ixchommies.herokuapp.com/";
  $http({
    method: "GET",
    url: url + "brus",
    params: { token: "c61c2ba10a06cfd0a03b1571534e8d61" }
  }).then(function(response) {
    $scope.brus = response.data;
    console.log("b", $scope.brus);
  });

  $http({
    method: "GET",
    url: url + "props/me",
    params: { token: "c61c2ba10a06cfd0a03b1571534e8d61" }
  }).then(function(response) {
    $scope.props = response.data;
    console.log(response.data[0].receiver.id);
    console.log("p", $scope.props);
  });
})