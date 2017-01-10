require('../css/main.scss');
const angular = require('angular');
const ngRoute = require('angular-route');
require('../route/in_theaters/controller');
require('../route/comming_soon/controller');
require('../route/top_250/controller');


angular.module('app', ['ngRoute', 'moviecat.in_theaters', 'moviecat.comming_soon', 'moviecat.top_250'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise(
            { redirectTo: '/in_theaters' }
        );
    }]).controller('AppController', ['$scope', function ($scope) {
        console.log('haha');
    }]);
