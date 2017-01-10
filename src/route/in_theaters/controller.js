module.exports = angular.module('moviecat.in_theaters', ['ngRoute', 'moviecat.utils'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/in_theaters/:page', {
                templateUrl: './src/route/in_theaters/view.html',
                constroller: 'InTheatersController'
            });
        }])
    .controller('InTheatersController', ['$scope', 'utils', '$routeParams',
        function ($scope, utils, $routeParams) {
            $scope.loading = true;
            $scope.current = parseInt($routeParams.page);
            $scope.data = null;
            $scope.pages = null;
            let count = 5;
            let start = ($scope.current - 1) * count;
            let url = `http://api.douban.com/v2/movie/in_theaters?count=${count}&start=${start}`;
            if (!$scope.data) {
                utils.getJsonp(url, 'callback',
                    function (data) {
                        $scope.data = data;
                        $scope.loading = false;
                        let total = Math.ceil(data.total / count);
                        $scope.pages = new Array(total);
                        for (let i = 0; i < $scope.pages.length; i++) {
                            $scope.pages[i] = i + 1;
                        }
                        $scope.$apply();
                    });
            }
        }]);
