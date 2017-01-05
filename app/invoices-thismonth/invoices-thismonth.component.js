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
var InvoicesThismonthComponent = (function () {
    function InvoicesThismonthComponent(location) {
        this.location = location;
        this.sort = [];
        this.pageSize = 10;
        this.skip = 0;
        this.gridData = [
            {
                "invoiceNumber": "00123",
                "invoiceIssue": "09-07-2016",
                "invoiceDue": "10-07-2016",
                "invoiceAmount": "$3200",
                "invoiceOwing": "$3200",
                "invoiceStatus": "Paid"
            },
            {
                "invoiceNumber": "00123",
                "invoiceIssue": "09-07-2016",
                "invoiceDue": "10-07-2016",
                "invoiceAmount": "$3200",
                "invoiceOwing": "$3200",
                "invoiceStatus": "Paid"
            },
            {
                "invoiceNumber": "00123",
                "invoiceIssue": "09-07-2016",
                "invoiceDue": "10-07-2016",
                "invoiceAmount": "$3200",
                "invoiceOwing": "$3200",
                "invoiceStatus": "Paid"
            },
            {
                "invoiceNumber": "00123",
                "invoiceIssue": "09-07-2016",
                "invoiceDue": "10-07-2016",
                "invoiceAmount": "$3200",
                "invoiceOwing": "$3200",
                "invoiceStatus": "Paid"
            },
            {
                "invoiceNumber": "00123",
                "invoiceIssue": "09-07-2016",
                "invoiceDue": "10-07-2016",
                "invoiceAmount": "$3200",
                "invoiceOwing": "$3200",
                "invoiceStatus": "Unpaid"
            },
            {
                "invoiceNumber": "00123",
                "invoiceIssue": "09-07-2016",
                "invoiceDue": "10-07-2016",
                "invoiceAmount": "$3200",
                "invoiceOwing": "$3200",
                "invoiceStatus": "Overdue"
            }
        ];
        this.loadProducts();
    }
    InvoicesThismonthComponent.prototype.goBack = function () {
        this.location.back();
    };
    InvoicesThismonthComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.loadProducts();
    };
    InvoicesThismonthComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.loadProducts();
    };
    InvoicesThismonthComponent.prototype.loadProducts = function () {
        this.gridView = {
            data: kendo_data_query_1.orderBy(this.gridData.slice(this.skip, this.skip + this.pageSize), this.sort),
            total: this.gridData.length
        };
    };
    return InvoicesThismonthComponent;
}());
InvoicesThismonthComponent = __decorate([
    core_1.Component({
        selector: 'invoices-thismonth',
        templateUrl: 'app/invoices-thismonth/invoices-thismonth.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [common_1.Location])
], InvoicesThismonthComponent);
exports.InvoicesThismonthComponent = InvoicesThismonthComponent;
//# sourceMappingURL=invoices-thismonth.component.js.map