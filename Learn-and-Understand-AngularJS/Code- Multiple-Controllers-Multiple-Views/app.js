var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.alertClick = () => {
        alert("クリックしました");
    };

    $scope.name = 'controller1';
}]);

myApp.controller('secondController', ['$scope', function ($scope) {

    $scope.alertClick = () => {
        alert("クリックしました");
    };

    $scope.name = 'controller2';
}]);