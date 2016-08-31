ssoApp.config(['$routeProvider', function ($routeProvider)
{
    $routeProvider

        .when
        (
            '/logout',
            {
                templateUrl: '/forms/logout/index.html',
                controller: 'com.thentia.sso.controller.default'
            }

        )

        .when
        (
            '/main',
            {
                templateUrl: '/forms/main/index.html',
                controller: 'com.thentia.sso.controller.default'
            }
        )

        .when
        (
            '/forgot',
            {
                templateUrl: '/forms/forgot/index.html',
                controller: 'com.thentia.sso.controller.default'
            }
        )

        .when
        (
            '/register/step-one',
            {
                templateUrl: '/forms/register/step1/index.html',
                controller: 'com.thentia.sso.controller.default'
            }
        )

        .when
        (
            '/register/step-two',
            {
                templateUrl: '/forms/register/step2/index.html',
                controller: 'com.thentia.sso.controller.default'
            }
        )

        .otherwise
        (
            {
                templateUrl: '/forms/login/index.html',
                controller: "com.thentia.sso.controller.default"
            }
        );

}]);