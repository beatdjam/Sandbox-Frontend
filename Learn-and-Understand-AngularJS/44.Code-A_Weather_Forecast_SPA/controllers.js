// 作成したmoduleにcontrollerを生やす
// ServiceをInjectする
// Scopeで持っている値は遷移しても維持されるっぽい
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', newVal => {
        cityService.city = newVal;
    });
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;
    // API叩いてないのでng-repeatの指定の方で制御するようにした
    $scope.days = $routeParams.days || '2';

    // APIが使えなくなってるのでlocalに置いたJSONを取るようにしてる
    $scope.weatherAPI = $resource("test.json", {});
    $scope.weatherResult = $scope.weatherAPI.get({});

    $scope.convertToCelcius = degK => Math.round(degK - 273.15);
    $scope.convertToDate = dt => new Date(dt * 1000);
}]);