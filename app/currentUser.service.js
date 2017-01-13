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
var currentUserService = (function () {
    function currentUserService(http, AuthService) {
        this.http = http;
        this.AuthService = AuthService;
    }
    currentUserService.prototype.getCurrentUser = function () {
        // add authorization header with jwt token
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this.AuthService.token });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log("heelo" + this.AuthService.token);
        // get users from api
        return this.http.get('/api/accounts', options)
            .map(function (res) { return res.json(); });
    };
    return currentUserService;
}());
currentUserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        auth_service_1.authService])
], currentUserService);
exports.currentUserService = currentUserService;
//# sourceMappingURL=currentUser.service.js.map