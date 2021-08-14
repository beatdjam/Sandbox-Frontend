const sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'template.html',
            controller: 'sampleController',
            controllerAs: 'ctrl'
        })
        .when('/:param', {
            templateUrl: 'template.html',
            controller: 'sampleController as ctrl'
        })
}]);

// Serviceを作成してモジュールに登録する
sampleApp.service('sampleService', function () {
    this.firstName = '太郎';
    this.lastName = '山田';
    this.fullName = () => this.firstName + ' ' + this.lastName;
});

// 登録したServiceをInjectして処理を呼び出す
sampleApp
    .controller('sampleController', ['$routeParams', 'sampleService', function ($routeParams, sampleService) {
        // $scopeじゃなくてthisに値を設定する
        this.msg = ($routeParams.param || 'Hello, World!') + ' ' + sampleService.fullName();
    }]);