const sampleApp = angular.module('sampleApp', []);

sampleApp
    .directive('sampleDirectiveA', () => {
        return {
            template: '<h2>{{ value }}</h2>',
            scope: {
                value: '='
            }
        }
    })
    .directive('sampleDirectiveB', () => {
        return {
            template: '<h2>{{ value }}</h2>',
            scope: {
                value: '@'
            }
        }
    })
    .directive('sampleDirectiveC', () => {
        return {
            template: '<h2>{{ function() }}</h2>',
            scope: {
                function: '&'
            }
        }
    });

sampleApp
    .controller('sampleController', [function () {
        this.msg = 'Hello, World!';
        this.upperMsg = function () {
            return this.msg.toUpperCase();
        }
    }]);