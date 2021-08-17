const sampleApp = angular.module('sampleApp', []);

// Directiveに渡す用の値を作るController
sampleApp
    .controller('sampleController', [function () {
        this.msg = 'Hello, World!';
        this.upperMsg = function () {
            return this.msg.toUpperCase();
        }
    }]);

// Directive
sampleApp
    .directive('sampleDirectiveA', () => {
        return {
            restrict: 'E', // elementとしてのみ呼び出せるよう制限
            template: '<h2>{{ value }}</h2>',
            scope: {
                value: '=' // scopeを=にすると親から渡されたその値は双方向バインディング状態になる
            }
        }
    })
    .directive('sampleDirectiveB', () => {
        return {
            restrict: 'E',
            template: '<h2>{{ value }}</h2>',
            scope: {
                value: '@' // scopeを@にすると文字列で渡されたことになる。
            }
        }
    })
    .directive('sampleDirectiveC', () => {
        return {
            restrict: 'E',
            template: '<h2>{{ function() }}</h2>',
            scope: {
                function: '&' // scopeを&にすると関数や配列を渡されたことになる。
            }
        }
    });
