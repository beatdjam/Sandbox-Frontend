const sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'template.html',
            controller: 'sampleController',
            controllerAs: 'ctrl'
        })
}]);

// 登録したServiceをInjectして処理を呼び出す
sampleApp
    .controller('sampleController', [function () {
        this.msg = 'Hello, World!';
    }]);