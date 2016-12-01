import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'invoices-single',
    templateUrl: 'app/invoices-single/invoices-single.component.html',
    encapsulation: ViewEncapsulation.None
})

export class InvoicesSingleComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}