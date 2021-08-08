var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

});

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    $scope.people = [
        {
            name: '山田 太郎',
            prefecture: '愛媛県',
            city: '松山市',
            address: '由利島'
        },
        {
            name: '田中 次郎',
            prefecture: '愛媛県',
            city: '松山市',
            address: '由利島'
        },
        {
            name: '佐藤 三郎',
            prefecture: '愛媛県',
            city: '松山市',
            address: '由利島'
        }
    ];

    $scope.formattedAddress = function (person) {
        return person.prefecture + person.city + person.address;
    };

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
}]);

myApp.directive('searchResult', function () {
    return {
        restrict: 'AE',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personObject: '=',
            formattedAddressFunction: '&'
        },
        link: function (scope, elements, attrs) {
            console.log('Post-リンク中...');
            console.log(scope);

            if (scope.personObject.name === '田中 次郎') {
                elements.removeAttr('class');
            }

            console.log(elements);
        }
    }
});