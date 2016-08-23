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

        .when
        (
            '/sign-up-one',
            {
                templateUrl: '/register_step_one.html',
                controller: 'com.thentia.sso.controller.default'
            }
        )

        .when
        (
            '/sign-up-two',
            {
                templateUrl: '/register_step_two.html',
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