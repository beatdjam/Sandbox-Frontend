// 作成したmoduleにcontrollerを生やす
// ServiceをInjectする
// Scopeで持っている値は遷移しても維持されるっぽい
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', newVal => {
        cityService.city = newVal;
    });

    $scope.submit = function () {
        $location.path('/forecast');
    };
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'forecastService', function ($scope, $routeParams, cityService, forecastService) {
    $scope.city = cityService.city;
    // API叩いてないのでng-repeatの指定の方で制御するようにした
    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = forecastService.getWeather($scope.city, $scope.days);
    $scope.convertToCelcius = degK => Math.round(degK - 273.15);
    $scope.convertToDate = dt => new Date(dt * 1000);
}]);