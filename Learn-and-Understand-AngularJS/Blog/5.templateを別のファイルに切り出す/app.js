const sampleApp = angular.module('sampleApp', ['ngRoute']);

// templateUrlに切り出したhtmlを指定する
sampleApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'template.html',
            controller: 'sampleController'
        })
        .when('/:param', {
            templateUrl: 'template.html',
            controller: 'sampleController'
        })
}]);

sampleApp
    .controller('sampleController',['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.msg = $routeParams.param || 'Hello, World!';
    }]);