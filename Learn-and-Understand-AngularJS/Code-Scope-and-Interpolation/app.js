var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    $scope.name = "Ken";
}]);

