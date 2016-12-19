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
var router_1 = require("@angular/router");
var TimesheetsClientsComponent = (function () {
    function TimesheetsClientsComponent(location, router) {
        this.location = location;
        this.router = router;
    }
    TimesheetsClientsComponent.prototype.goBack = function () {
        this.location.back();
    };
    TimesheetsClientsComponent.prototype.checkIfEdit = function () {
        console.log(this.router.url);
    };
    return TimesheetsClientsComponent;
}());
TimesheetsClientsComponent = __decorate([
    core_1.Component({
        selector: 'timesheets-clients',
        templateUrl: 'app/timesheets-clients/timesheets-clients.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router])
], TimesheetsClientsComponent);
exports.TimesheetsClientsComponent = TimesheetsClientsComponent;
//# sourceMappingURL=timesheets-clients.component.js.map