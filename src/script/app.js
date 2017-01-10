require('../css/main.scss');
const angular = require('angular');
const ngRoute = require('angular-route');
require('./utils');
require('../route/movielist');


angular.module('app', ['ngRoute', 'moviecat.movie_list'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise(
            { redirectTo: '/in_theaters/1' }
        );
    }])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }])
    .controller('AppController', ['$scope', function ($scope) {
        console.log('haha');
    }]);
