var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'pages/main.html', controller: 'mainController'})
        .when('/second', {templateUrl: 'pages/second.html', controller: 'secondController'})

})
myApp.controller('mainController', ['$scope', '$location', '$log', function ($scope, $location, $log) {

    $log.log($location.path());
    $scope.name = 'main';
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', function ($scope, $location, $log) {

    $log.log($location.path());
    $scope.name = 'second';

}]);