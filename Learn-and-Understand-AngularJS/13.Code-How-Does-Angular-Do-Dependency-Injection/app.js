var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

});

var searchPeople = function (firstName, lastName, height, age, hobby) {
    return '山田 太郎';
};

console.log(angular.injector().annotate(searchPeople));
// ["firstName", "lastName", "height", "age", "hobby"]
