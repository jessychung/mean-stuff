ssoApp.service('ssosession', function ($http, $location, $cookies)
{
    var ssosession =
    {
        authenticationToken: null,
        profile: null,
        profileLoaded: false,

        setProfileLoaded: function (v) {
            this.profileLoaded = v;
        },

        isProfileLoaded: function () {
            return this.profileLoaded;
        },

        getAuthenticationToken: function () {
            return this.authenticationToken;
        },

        setAuthenticationToken: function (token) {
            this.authenticationToken = token;
        },

        reset: function ()
        {
            this.authenticationToken = null;
            this.profile = null;
            this.profileLoaded = false;
            this.activeRenewal = null;
            this.activeRenewalLoaded = false;
            this.activePlan = null;
            this.activePlanLoaded = false;
        },

        getProfile: function () {
            var self = this;
            if (self.isProfileLoaded())
                return self.profile;

            return null;
        },

        resume: function (callback)
        {
            var self = this;

            if ($cookies.get("ssosession") !== null && $cookies.get("ssosession") !== undefined)
                self.authenticationToken = $cookies.get("ssosession");

            if (self.profile === null)
            {
                if (self.getAuthenticationToken() !== null && self.getAuthenticationToken() !== '' && self.getAuthenticationToken() !== undefined)
                {
                    $http.defaults.headers.common.Authorization = 'Bearer ' + self.authenticationToken;
                }
            }

            else
            {
                callback(true, self.profile);
            }
        },

        isAuthenticated: function () {
            return (this.authenticationToken !== null);
        },

        authenticate: function (username, password, callback)
        {
            var self = this;
        }

    };

    return ssosession;

});
