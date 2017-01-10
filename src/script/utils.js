module.exports = angular.module('moviecat.utils', [])
    .service('utils', ['$window', '$document', function ($window, $document) {
        this.getJsonp = function (url, jsonp, handler) {
            function get(url, handler) {
                $window.jsonpHandler = handler;
                // const script = $document.createElement('script');
                const script = angular.element('<script></script>');
                return new Promise(function (resolve, reject) {
                    // script.src = url;
                    script.attr('src', url);
                    const bundle = {
                        script: script,
                        url: url,
                        err: null
                    };
                    resolve(bundle);
                });
            }

            const requestUrl = url.indexOf('?') === -1 ?
                url + `?${jsonp}=jsonpHandler&_=${new Date().getTime()}` :
                url + `&${jsonp}=jsonpHandler&_=${new Date().getTime()}`;

            return get(requestUrl, handler).then(function (bundle) {
                return new Promise(function (resolve, reject) {
                    // $document.body.appendChild(bundle.script);
                    $document.find('body').append(bundle.script);
                    // bundle.script.onload = function () {
                    //     bundle.script.onload = null;
                    //     resolve(bundle);
                    // };
                    bundle.script.on('load', function () {
                        bundle.script[0].onload = null;
                        resolve(bundle);
                    });
                    // bundle.script.onerror = function () {
                    //     bundle.script.error = null;
                    //     bundle.err = new Error('error occurred.');
                    //     reject(bundle);
                    // };
                    bundle.script.on('error', function () {
                        bundle.script[0].error = null;
                        bundle.err = new Error('error occurred.');
                        reject(bundle);
                    });
                });
            }).catch(function (bundle) {
                if (bundle.err === undefined) {
                    console.log(bundle);//which is the error info passed by Promise itself.
                    return null;
                } else {
                    console.log(bundle.err);
                    return bundle;
                }
            }).then(function (bundle) {
                if (bundle === null) {
                    // let dullScript = $document.querySelector(`script[src=${requestUrl}]`);
                    let dullScript = angular.element(`script[src=${requestUrl}]`);
                    // $document.body.removeChild(dullScript);
                   dullScript.remove();
                } else {
                    // $document.body.removeChild(bundle.script);
                    bundle.script.remove();
                }
            }).then(function () {
                delete $window.jsonpHandler;
            });
        }
    }]);