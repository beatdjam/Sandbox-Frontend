var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

});

myApp.service('nameService', function () {
    this.name = '山田 太郎';
    this.nameLength = () => this.name.length;
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
    $scope.name = nameService.name;
    $scope.$watch('name', (newVal) => nameService.name = newVal);
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {
    $scope.name = nameService.name;
    $scope.num = $routeParams.num || 'hoge';
    $scope.$watch('name', (newVal) => nameService.name = newVal);
}]);