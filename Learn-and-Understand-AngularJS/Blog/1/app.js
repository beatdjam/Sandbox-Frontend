// sampleAppモジュールを作成
const sampleApp = angular.module('sampleApp', []);

// sampleAppモジュールにsampleControllerを関連付ける
// AngularJSの機能で$scopeサービスを利用してコントローラーに紐づく変数を定義する
sampleApp.controller('sampleController', function ($scope) {
    $scope.msg = 'Hello, World!';
});