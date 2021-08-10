weatherApp.directive('weatherReport', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=", // 値渡し
            convertToStandard: '&', // 関数
            convertToDate: '&',
            dateFormat: '@' // 文字列渡し
        }
    }
});