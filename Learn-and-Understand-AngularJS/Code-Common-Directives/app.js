var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

    $scope.handle = '';
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;
    $scope.rules = [
        {rulename: '5文字でなければいけません'},
        {rulename: '他のユーザーに使われています'}
    ];

    console.log($scope.rules)
}]);