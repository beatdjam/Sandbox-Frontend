var myApp = angular.module('myApp', []);

// myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
//     $log.info($scope);
// }]);
myApp.controller("mainController",["$scope","$log",function(a,b){b.info(a)}]);