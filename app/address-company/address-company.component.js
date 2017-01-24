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
var common_1 = require("@angular/common");
var currentUser_service_1 = require("../currentUser.service");
var AddressCompanyComponent = (function () {
    function AddressCompanyComponent(location, CurrentUserService) {
        this.location = location;
        this.CurrentUserService = CurrentUserService;
        this.currentUser = [];
    }
    AddressCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var currentUserToken = currentUser.token;
            this.CurrentUserService.getCurrentUser(currentUserToken)
                .subscribe(function (res) {
                _this.currentUser.push(res);
                _this.currentId = _this.currentUser[0]._id;
            });
        }
    };
    AddressCompanyComponent.prototype.goBack = function () {
        this.location.back();
    };
    return AddressCompanyComponent;
}());
AddressCompanyComponent = __decorate([
    core_1.Component({
        selector: 'address-company',
        templateUrl: 'app/address-company/address-company.component.html',
        providers: [currentUser_service_1.currentUserService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [common_1.Location,
        currentUser_service_1.currentUserService])
], AddressCompanyComponent);
exports.AddressCompanyComponent = AddressCompanyComponent;
//# sourceMappingURL=address-company.component.js.map