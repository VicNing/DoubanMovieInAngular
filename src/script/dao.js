module.exports = angular.module('moviecat.dao', ['moviecat.utils'])
    .service('dao', ['utils', function (utils) {
        this.getData = function (url, func) {
            let data = null;
            return utils.getJsonp(url, 'callback', func);
        };
    }]);