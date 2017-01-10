module.exports = angular.module('moviecat.in_theaters', ['ngRoute'])
    .config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl:'./src/route/in_theaters/view.html',
            constroller: 'InTheatersController'
        });
    }]).controller('InTheatersController', ['$scope', function () {
        
    }]);