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
var InvoicesSingleComponent = (function () {
    function InvoicesSingleComponent(location) {
        this.location = location;
    }
    InvoicesSingleComponent.prototype.goBack = function () {
        this.location.back();
    };
    InvoicesSingleComponent = __decorate([
        core_1.Component({
            selector: 'invoices-single',
            templateUrl: 'app/invoices-single/invoices-single.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], InvoicesSingleComponent);
    return InvoicesSingleComponent;
}());
exports.InvoicesSingleComponent = InvoicesSingleComponent;
//# sourceMappingURL=invoices-single.component.js.map