module.exports = angular.module('moviecat.comming_soon', ['ngRoute'])
    .config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/comming_soon', {
            templateUrl:'./src/route/comming_soon/view.html',
            constroller: 'CommingSoonController'
        });
    }]).controller('CommingSoonController', ['$scope', function () {
        
    }]);