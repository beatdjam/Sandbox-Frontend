var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function ($scope, $log, $filter, $resource) {
    console.log($scope);
    console.log($log);

    $log.log('log');
    $log.debug('debug');
    $log.info('info');
    $log.warn('warn');
    $log.error('error');

    $scope.name = 'Ken';
    $scope.formattedName = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedName);
});