const sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp
    .controller('sampleController', ['$scope', function ($scope) {
        $scope.msg = 'Hello, World!';
    }])
    .controller('sampleController2', ['$scope', function ($scope) {
        $scope.msg = 'Hello, NewWorld!';
    }]);

sampleApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<h2>{{ msg }}</h2>',
            controller: 'sampleController'
        })
        .when('/sample2', {
            template: '<h2>{{ msg }}</h2>',
            controller: 'sampleController2'
        })
}]);