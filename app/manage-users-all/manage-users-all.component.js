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
var kendo_data_query_1 = require("@progress/kendo-data-query");
var ManageUsersAllComponent = (function () {
    function ManageUsersAllComponent(location) {
        this.location = location;
        this.sort = [];
        this.pageSize = 2;
        this.skip = 0;
        this.gridData = [
            {
                "userAvatar": "JS",
                "userAvatarColour": "#048586",
                "userFname": "John",
                "userLname": "Smith",
                "userEmail": "johns@thentia.com",
                "userRole": "Admin"
            },
            {
                "userAvatar": "BE",
                "userAvatarColour": "#ad2c57",
                "userFname": "Beth",
                "userLname": "Ericksen",
                "userEmail": "bethe@thentia.com",
                "userRole": "User"
            },
            {
                "userAvatar": "WP",
                "userAvatarColour": "#185ba6",
                "userFname": "William",
                "userLname": "Powell",
                "userEmail": "willp@thentia.com",
                "userRole": "User"
            }
        ];
        this.loadProducts();
    }
    ManageUsersAllComponent.prototype.goBack = function () {
        this.location.back();
    };
    ManageUsersAllComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.loadProducts();
    };
    ManageUsersAllComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.loadProducts();
    };
    ManageUsersAllComponent.prototype.loadProducts = function () {
        this.gridView = {
            data: kendo_data_query_1.orderBy(this.gridData.slice(this.skip, this.skip + this.pageSize), this.sort),
            total: this.gridData.length
        };
    };
    return ManageUsersAllComponent;
}());
ManageUsersAllComponent = __decorate([
    core_1.Component({
        selector: 'manage-users-all',
        templateUrl: 'app/manage-users-all/manage-users-all.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [common_1.Location])
], ManageUsersAllComponent);
exports.ManageUsersAllComponent = ManageUsersAllComponent;
//# sourceMappingURL=manage-users-all.component.js.map