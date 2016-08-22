ssoApp.controller('com.thentia.sso.controller.default', function ($http, $routeParams, $scope, $location, $cookies, ssosession)
{
    $scope.session = ssosession;
    $scope.loading = true;

});
