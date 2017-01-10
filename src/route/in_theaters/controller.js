module.exports = angular.module('moviecat.in_theaters', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/in_theaters', {
                templateUrl: './src/route/in_theaters/view.html',
                constroller: 'InTheatersController'
            });
        }])
    .controller('InTheatersController', ['$scope', '$http', function ($scope, $http) {
        /*$scope.data = {
            "count": 5, "start": 0, "total": 28, "subjects": [{ "rating": { "max": 10, "average": 7.5, "stars": "40", "min": 0 }, "genres": ["\u52a8\u4f5c", "\u79d1\u5e7b", "\u5192\u9669"], "title": "\u661f\u7403\u5927\u6218\u5916\u4f20\uff1a\u4fa0\u76d7\u4e00\u53f7", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1013981\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/42373.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/42373.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/42373.jpg" }, "name": "\u83f2\u4e3d\u5e0c\u7f07\u00b7\u743c\u65af", "id": "1013981" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1013867\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/36123.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/36123.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/36123.jpg" }, "name": "\u8fed\u6208\u00b7\u9c81\u7eb3", "id": "1013867" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1025194\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/10695.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/10695.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/10695.jpg" }, "name": "\u7504\u5b50\u4e39", "id": "1025194" }], "collect_count": 45351, "original_title": "Rogue One: A Star Wars Story", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1310557\/", "avatars": { "small": "http://img3.doubanio.com\/img\/celebrity\/small\/1351661374.56.jpg", "large": "http://img3.doubanio.com\/img\/celebrity\/large\/1351661374.56.jpg", "medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1351661374.56.jpg" }, "name": "\u52a0\u91cc\u65af\u00b7\u7231\u5fb7\u534e\u65af", "id": "1310557" }], "year": "2016", "images": { "small": "http://img3.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2403049086.jpg", "large": "http://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2403049086.jpg", "medium": "http://img3.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2403049086.jpg" }, "alt": "https:\/\/movie.douban.com\/subject\/25894431\/", "id": "25894431" }, { "rating": { "max": 10, "average": 6.3, "stars": "35", "min": 0 }, "genres": ["\u559c\u5267"], "title": "\u60c5\u5723", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1274979\/", "avatars": { "small": "http://img3.doubanio.com\/img\/celebrity\/small\/9489.jpg", "large": "http://img3.doubanio.com\/img\/celebrity\/large\/9489.jpg", "medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/9489.jpg" }, "name": "\u8096\u592e", "id": "1274979" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1274496\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/37681.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/37681.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/37681.jpg" }, "name": "\u95eb\u59ae", "id": "1274496" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1274081\/", "avatars": { "small": "http://img3.doubanio.com\/img\/celebrity\/small\/6398.jpg", "large": "http://img3.doubanio.com\/img\/celebrity\/large\/6398.jpg", "medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/6398.jpg" }, "name": "\u5c0f\u6c88\u9633", "id": "1274081" }], "collect_count": 28676, "original_title": "\u60c5\u5723", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1325035\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/1353401566.43.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/1353401566.43.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1353401566.43.jpg" }, "name": "\u5b8b\u6653\u98de ", "id": "1325035" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1364417\/", "avatars": { "small": "http://img3.doubanio.com\/img\/celebrity\/small\/1480566101.36.jpg", "large": "http://img3.doubanio.com\/img\/celebrity\/large\/1480566101.36.jpg", "medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1480566101.36.jpg" }, "name": "\u8463\u65ed", "id": "1364417" }], "year": "2016", "images": { "small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2409022364.jpg", "large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2409022364.jpg", "medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2409022364.jpg" }, "alt": "https:\/\/movie.douban.com\/subject\/26879060\/", "id": "26879060" }, { "rating": { "max": 10, "average": 5.1, "stars": "25", "min": 0 }, "genres": ["\u559c\u5267", "\u52a8\u4f5c"], "title": "\u94c1\u9053\u98de\u864e", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1054531\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/694.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/694.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/694.jpg" }, "name": "\u6210\u9f99", "id": "1054531" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1337445\/", "avatars": { "small": "http://img3.doubanio.com\/img\/celebrity\/small\/1405266144.28.jpg", "large": "http://img3.doubanio.com\/img\/celebrity\/large\/1405266144.28.jpg", "medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1405266144.28.jpg" }, "name": "\u9ec4\u5b50\u97ec", "id": "1337445" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1314544\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/1444998211.72.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/1444998211.72.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1444998211.72.jpg" }, "name": "\u738b\u51ef", "id": "1314544" }], "collect_count": 37121, "original_title": "\u94c1\u9053\u98de\u864e", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1274856\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/20143.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/20143.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/20143.jpg" }, "name": "\u4e01\u665f", "id": "1274856" }], "year": "2016", "images": { "small": "http://img3.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2404720316.jpg", "large": "http://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2404720316.jpg", "medium": "http://img3.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2404720316.jpg" }, "alt": "https:\/\/movie.douban.com\/subject\/26389069\/", "id": "26389069" }, { "rating": { "max": 10, "average": 8.8, "stars": "45", "min": 0 }, "genres": ["\u5267\u60c5", "\u4f20\u8bb0", "\u52a8\u4f5c"], "title": "\u8840\u6218\u94a2\u952f\u5cad", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1022620\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/13151.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/13151.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/13151.jpg" }, "name": "\u5b89\u5fb7\u9c81\u00b7\u52a0\u83f2\u5c14\u5fb7", "id": "1022620" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1000147\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/35783.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/35783.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/35783.jpg" }, "name": "\u8428\u59c6\u00b7\u6c83\u8f9b\u987f", "id": "1000147" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1002673\/", "avatars": { "small": "http://img3.doubanio.com\/img\/celebrity\/small\/6056.jpg", "large": "http://img3.doubanio.com\/img\/celebrity\/large\/6056.jpg", "medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/6056.jpg" }, "name": "\u6587\u65af\u00b7\u6c83\u6069", "id": "1002673" }], "collect_count": 161781, "original_title": "Hacksaw Ridge", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1054530\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/680.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/680.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/680.jpg" }, "name": "\u6885\u5c14\u00b7\u5409\u5e03\u68ee", "id": "1054530" }], "year": "2016", "images": { "small": "http://img3.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2397337958.jpg", "large": "http://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2397337958.jpg", "medium": "http://img3.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2397337958.jpg" }, "alt": "https:\/\/movie.douban.com\/subject\/26325320\/", "id": "26325320" }, { "rating": { "max": 10, "average": 5, "stars": "25", "min": 0 }, "genres": ["\u5267\u60c5", "\u52a8\u4f5c", "\u5947\u5e7b"], "title": "\u957f\u57ce", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1054443\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/620.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/620.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/620.jpg" }, "name": "\u9a6c\u7279\u00b7\u8fbe\u8499", "id": "1054443" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1275432\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/1407683852.1.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/1407683852.1.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1407683852.1.jpg" }, "name": "\u666f\u751c", "id": "1275432" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1329628\/", "avatars": { "small": "http://img7.doubanio.com\/img\/celebrity\/small\/1397806328.94.jpg", "large": "http://img7.doubanio.com\/img\/celebrity\/large\/1397806328.94.jpg", "medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1397806328.94.jpg" }, "name": "\u4f69\u5fb7\u7f57\u00b7\u5e15\u65af\u5361", "id": "1329628" }], "collect_count": 180347, "original_title": "The Great Wall", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1054398\/", "avatars": { "small": "http://img3.doubanio.com\/img\/celebrity\/small\/568.jpg", "large": "http://img3.doubanio.com\/img\/celebrity\/large\/568.jpg", "medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/568.jpg" }, "name": "\u5f20\u827a\u8c0b", "id": "1054398" }], "year": "2016", "images": { "small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2394573821.jpg", "large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2394573821.jpg", "medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2394573821.jpg" }, "alt": "https:\/\/movie.douban.com\/subject\/6982558\/", "id": "6982558" }], "title": "\u6b63\u5728\u4e0a\u6620\u7684\u7535\u5f71-\u5317\u4eac"
        };*/
        $scope.data = {};
        $http({
            method: 'JSONP',
            url: 'http://api.douban.com/v2/movie/in_theaters?count=20&callback=jsonpHandler',

        }).then(function (response) {
            console.log(response);
        }, function (err) {
            if (err) {
                throw err;
            }
        });
    }]);