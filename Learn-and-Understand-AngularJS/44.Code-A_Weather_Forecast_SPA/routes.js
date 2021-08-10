// routingの設定
// どのhtmlがどのtemplateに対応しているかを設定する
// これが挿入される場所はng-viewで指定する
weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days', { // 変数は別でルーティングする
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
});