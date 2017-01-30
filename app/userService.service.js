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
var userService = (function () {
    function userService(http) {
        this.http = http;
        console.log('getting the users...');
    }
    // get data
    userService.prototype.getUsers = function (id) {
        return this.http.get('/api/users/' + id)
            .map(function (res) { return res.json(); });
    };
    // getUserCount(id): Observable<any> {
    //     return this.http.get('/api/users/' + id)
    //         .flatMap((response: Response) => response.json())
    //         .flatMap((film: string) => this.http.get(film),
    //             (_, resp) => resp.json().title)
    // }
    userService.prototype.createUser = function (newUser) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users', JSON.stringify(newUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    userService.prototype.deleteUser = function (id) {
        return this.http.delete('/api/users/' + id)
            .map(function (res) { return res.json(); });
    };
    userService.prototype.updateUser = function (updatedUser) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/users/' + updatedUser._id, JSON.stringify(updatedUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return userService;
}());
userService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], userService);
exports.userService = userService;
//# sourceMappingURL=userService.service.js.map