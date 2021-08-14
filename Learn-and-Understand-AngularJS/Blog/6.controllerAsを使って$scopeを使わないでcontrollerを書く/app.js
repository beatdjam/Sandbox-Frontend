const sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // controllerとcontrollerAsを分けて書く場合
        .when('/', {
            templateUrl: 'template.html',
            controller: 'sampleController',
            controllerAs: 'ctrl'
        })
        // templateに埋め込む形で書く場合
        .when('/:param', {
            templateUrl: 'template.html',
            controller: 'sampleController as ctrl'
        })
}]);

sampleApp
    .controller('sampleController',['$routeParams', function ($routeParams) {
        // $scopeじゃなくてthisに値を設定する
        this.msg = $routeParams.param || 'Hello, World!';
    }]);