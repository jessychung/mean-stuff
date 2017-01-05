import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';


@Component ({
    selector: 'invoices-thismonth',
    templateUrl: 'app/invoices-thismonth/invoices-thismonth.component.html',
    encapsulation: ViewEncapsulation.None
})

export class InvoicesThismonthComponent {
    constructor(
        private location: Location
    ) {
        this.loadProducts();
    }

    goBack(): void {
        this.location.back();
    }

    private sort: SortDescriptor[] = [];
    private gridView: GridDataResult;

    private pageSize: number = 10;
    private skip: number = 0;


    private gridData: any[] = [
        {
            "invoiceNumber": "00123",
            "invoiceIssue" : "09-07-2016",
            "invoiceDue": "10-07-2016",
            "invoiceAmount": "$3200",
            "invoiceOwing": "$3200",
            "invoiceStatus": "Paid"
        },
        {
            "invoiceNumber": "00123",
            "invoiceIssue" : "09-07-2016",
            "invoiceDue": "10-07-2016",
            "invoiceAmount": "$3200",
            "invoiceOwing": "$3200",
            "invoiceStatus": "Paid"
        },
        {
            "invoiceNumber": "00123",
            "invoiceIssue" : "09-07-2016",
            "invoiceDue": "10-07-2016",
            "invoiceAmount": "$3200",
            "invoiceOwing": "$3200",
            "invoiceStatus": "Paid"
        },
        {
            "invoiceNumber": "00123",
            "invoiceIssue" : "09-07-2016",
            "invoiceDue": "10-07-2016",
            "invoiceAmount": "$3200",
            "invoiceOwing": "$3200",
            "invoiceStatus": "Paid"
        },
        {
            "invoiceNumber": "00123",
            "invoiceIssue" : "09-07-2016",
            "invoiceDue": "10-07-2016",
            "invoiceAmount": "$3200",
            "invoiceOwing": "$3200",
            "invoiceStatus": "Unpaid"
        },
        {
            "invoiceNumber": "00123",
            "invoiceIssue" : "09-07-2016",
            "invoiceDue": "10-07-2016",
            "invoiceAmount": "$3200",
            "invoiceOwing": "$3200",
            "invoiceStatus": "Overdue"
        }
    ];

    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: orderBy(this.gridData.slice(this.skip, this.skip + this.pageSize), this.sort),
            total: this.gridData.length
        };
    }
}