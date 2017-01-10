module.exports = angular.module('moviecat.top_250', ['ngRoute'])
    .config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/top_250', {
            templateUrl:'./src/route/top_250/view.html',
            constroller: 'Top250Controller'
        });
    }]).controller('Top250Controller', ['$scope', function () {
        
    }]);