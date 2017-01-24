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
var currentUser_service_1 = require("../currentUser.service");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DashboardComponent = (function () {
    function DashboardComponent(http, CurrentUserService) {
        this.http = http;
        this.CurrentUserService = CurrentUserService;
        this.currentUser = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var currentUserToken = currentUser.token;
            this.CurrentUserService.getCurrentUser(currentUserToken)
                .subscribe(function (res) {
                _this.currentUser.push(res);
            });
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: 'app/dashboard/dashboard.component.html',
        providers: [currentUser_service_1.currentUserService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [http_1.Http,
        currentUser_service_1.currentUserService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map