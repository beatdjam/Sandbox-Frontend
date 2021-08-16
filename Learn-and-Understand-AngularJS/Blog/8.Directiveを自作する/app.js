const sampleApp = angular.module('sampleApp', []);

sampleApp.directive('sampleDirective', () => {
    return {
        template: '<h2>{{ ctrl.msg }}</h2>',
        controller: 'sampleController',
        controllerAs: 'ctrl'
    }
});

sampleApp
    .controller('sampleController', [function () {
        this.msg = 'Hello, World!';
    }]);