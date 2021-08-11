// 自作のServiceを作る
// ServiceはシングルトンなのでController間で値の共有ができる
weatherApp.service('cityService', function () {
    this.city = 'Osaka';
});

weatherApp.service('forecastService', ['$resource', function ($resource) {
    // APIが使えなくなってるのでlocalに置いたJSONを取るようにしてる
    this.getWeather = (city, days) => {
        return $resource("test.json", {}).get({q: city, cnt: days,});
    }
}]);