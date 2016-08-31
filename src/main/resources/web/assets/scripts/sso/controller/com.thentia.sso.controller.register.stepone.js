ssoApp.controller('com.thentia.sso.controller.register.stepone', function ($http, $routeParams, $scope, $location, $cookies, ssosession)
{
    $scope.session = ssosession;
    $scope.loading = true;


    $scope.hideAppBox = function(){
        $scope.openapps = false;
    };

    $scope.submitForm = function ()
    {
        if ($scope.form.$valid)
        {
            $location.path('/register/step-two');
        }
    }

});

ssoApp.directive('hideApps', function($document){
    return {
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
            elem.bind('click', function(e) {
                e.stopPropagation();
            });
            $document.bind('click', function() {
                scope.$apply(attr.hideApps);
            })
        }
    }
});
