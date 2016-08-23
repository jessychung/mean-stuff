///<reference path="Organization.ts"/>
var User = (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._sso_id;
        },
        set: function (value) {
            this._sso_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "firstname", {
        get: function () {
            return this._sso_firstname;
        },
        set: function (value) {
            this._sso_firstname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastname", {
        get: function () {
            return this._sso_lastname;
        },
        set: function (value) {
            this._sso_lastname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email1", {
        get: function () {
            return this._sso_email1;
        },
        set: function (value) {
            this._sso_email1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email2", {
        get: function () {
            return this._sso_email2;
        },
        set: function (value) {
            this._sso_email2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "telephone1", {
        get: function () {
            return this._sso_telephone1;
        },
        set: function (value) {
            this._sso_telephone1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "mobile1", {
        get: function () {
            return this._sso_mobile1;
        },
        set: function (value) {
            this._sso_mobile1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "organizations", {
        get: function () {
            return this._sso_organizations;
        },
        set: function (value) {
            this._sso_organizations = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
//# sourceMappingURL=User.js.map