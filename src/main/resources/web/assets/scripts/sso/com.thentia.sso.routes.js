ssoApp.config(['$routeProvider', function ($routeProvider)
{
    $routeProvider

        .when
        (
            '/logout',
            {
                templateUrl: '/logout.html',
                controller: 'com.thentia.sso.controller.default'
            }

        )

        .otherwise
        (
            {
                templateUrl: '/login.html',
                controller: "com.thentia.sso.controller.default"
            }
        );

}]);