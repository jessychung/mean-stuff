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

        .when
        (
            '/service',
            {
                templateUrl: '/main.html',
                controller: 'com.thentia.sso.controller.default'
            }
        )

        .when
        (
            '/forgot',
            {
                templateUrl: '/forgot.html',
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