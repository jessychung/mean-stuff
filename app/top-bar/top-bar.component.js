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
var TopbarComponent = (function () {
    function TopbarComponent(CurrentUserService) {
        this.CurrentUserService = CurrentUserService;
        this.currentUser = [];
    }
    TopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var currentUserEmail = currentUser.accountEmail;
            this.CurrentUserService.getCurrentUser(currentUserEmail)
                .subscribe(function (res) {
                _this.currentUser.push(res);
            });
        }
    };
    return TopbarComponent;
}());
TopbarComponent = __decorate([
    core_1.Component({
        selector: 'top-bar',
        templateUrl: 'app/top-bar/top-bar.component.html',
        providers: [currentUser_service_1.currentUserService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [currentUser_service_1.currentUserService])
], TopbarComponent);
exports.TopbarComponent = TopbarComponent;
//# sourceMappingURL=top-bar.component.js.map