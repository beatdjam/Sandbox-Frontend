var myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope) {

});

var searchPeople = function (firstName, lastName, height, age, hobby) {
    return '山田 太郎';
}

console.log(searchPeople(1, 2, 3, 4, 5))
console.log(searchPeople)
console.log(searchPeople.toString())
