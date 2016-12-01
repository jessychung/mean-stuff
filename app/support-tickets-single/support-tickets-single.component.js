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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var SupportTicketsSingleComponent = (function () {
    function SupportTicketsSingleComponent(location) {
        this.location = location;
    }
    SupportTicketsSingleComponent.prototype.goBack = function () {
        this.location.back();
    };
    SupportTicketsSingleComponent = __decorate([
        core_1.Component({
            selector: 'support-tickets-single',
            templateUrl: 'app/support-tickets-single/support-tickets-single.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], SupportTicketsSingleComponent);
    return SupportTicketsSingleComponent;
}());
exports.SupportTicketsSingleComponent = SupportTicketsSingleComponent;
//# sourceMappingURL=support-tickets-single.component.js.map