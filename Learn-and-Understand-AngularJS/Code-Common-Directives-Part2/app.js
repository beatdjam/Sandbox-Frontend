var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.alertClick = function () {

        alert("クリックしました");

    };

    $scope.name = 'Ken Fukuyama';
}]);