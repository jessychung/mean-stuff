ssoApp.run(function ($rootScope, $location)
{
    $rootScope.go = function (path) {
        $location.path(path);
    }

    $rootScope.safe = function (variable) {
        if (variable === null)
            return false;
        if (variable === undefined)
            return false;
        if (variable === '')
            return false;

        return true;
    }

    $rootScope.formatDate = function (isodate) {
        return moment(isodate).format('MM-DD-YYYY');
    };

    $rootScope.formatLongDate = function (isodate) {
        return moment(isodate).format('MMM-DD-YYYY');
    };

    $rootScope.formatDateKendo = function (isodate) {
        return moment(isodate).format('MM/DD/YYYY');
    };

    $rootScope.isBeforeNow = function (isodate)
    {
        var now = moment();
        var date = moment(isodate);

        if (isodate === null || isodate === undefined || isodate === '')
            return true;

        return date.isBefore(now);
    };

    $rootScope.isAfterNow = function (isodate)
    {
        var now = moment();
        var date = moment(isodate);

        if (isodate === null || isodate === undefined || isodate === '')
            return false;

        return date.isAfter(now);
    };

    $rootScope.$on('$routeChangeSuccess', function(){
        //ga('send', 'pageview', $location.path());
    });

});