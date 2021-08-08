var myApp = angular.module('myApp', ['ngRoute']);

myApp.config($routeProvider => {
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

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    $scope.person = {
        name: '山田 太郎',
        address: '住所',
    }
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
}]);

myApp.directive('searchResult', () => ({
    restrict: 'AE',
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
        personName: '@',
        personAddress: '@'
    }
}));