"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var auth_service_1 = require("./auth.service");
var accountService = (function () {
    function accountService(http, AuthService) {
        this.http = http;
        this.AuthService = AuthService;
    }
    accountService.prototype.getAccounts = function (id) {
        if (localStorage.getItem('currentUser')) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this.AuthService.token });
            var options = new http_1.RequestOptions({ headers: headers });
            return this.http.get('/api/accounts/' + id, options)
                .map(function (res) { return res.json(); });
        }
    };
    return accountService;
}());
accountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        auth_service_1.authService])
], accountService);
exports.accountService = accountService;
//# sourceMappingURL=accounts.service.js.map