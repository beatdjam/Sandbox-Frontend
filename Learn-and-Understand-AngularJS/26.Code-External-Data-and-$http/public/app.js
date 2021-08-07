var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', '$timeout', function ($scope, $filter, $http) {

    $scope.handle = '';
    $scope.lowercasehandle = () => $filter('lowercase')($scope.handle);

    $scope.characters = 5;

    $http.get('http://localhost:3000/api')
        .then(result => $scope.rules = result.data)
        .catch(err => console.log(err));

    $scope.newRule = '';
    $scope.addRule = function () {
        $http.post('http://localhost:3000/api', {rulename: $scope.newRule})
            .then(result => {
                $scope.newRule = '';
                $scope.rules.push(result.data);
            })
            .catch(err => console.log(err));
    }
}]);