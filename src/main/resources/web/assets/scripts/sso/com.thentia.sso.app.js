console.log ('sso.thentia.com - Your gateway to the future')
console.log ('Initializing...');
console.log ('**********************************************************');

var ssoApp = angular.module('com.thentia.sso.app', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngCookies', 'ngResource', 'ngMessages', 'kendo.directives']);

ssoApp.filter('unsafe', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
});