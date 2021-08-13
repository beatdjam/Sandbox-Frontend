const sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp.config(['$routeProvider', function ($routeProvider) {
    // #/ の場合と、 #/{何らかの文字列} の場合のルーティングを設定する
    // この定義の場合、#/{何らかの文字列}における何らかの文字列がparamにバインドされてControllerに渡される
    $routeProvider
        .when('/', {
            template: '<h2>{{ msg }}</h2>',
            controller: 'sampleController'
        })
        .when('/:param', {
            template: '<h2>{{ msg }}</h2>',
            controller: 'sampleController'
        })
}]);

// $routeParamsを利用してpathに含まれる文字列(paramに対応するもの)をViewに反映する
// 何も渡されなかったときはデフォルトの文字列を表示する
sampleApp
    .controller('sampleController',['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.msg = $routeParams.param || 'Hello, World!';
    }]);