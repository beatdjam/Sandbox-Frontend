var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

    $scope.handle = '';
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.$watch('handle', function(newValue, oldValue){
        console.log('変化がありました');
        console.log('old: ' + oldValue);
        console.log('new: ' + newValue);
    });

    setTimeout(() => {
       $scope.$apply(() => {
           $scope.handle = 'hogehogehogehoge';
           console.log('スコープが変わりました')
       })
    });
}]);