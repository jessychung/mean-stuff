import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'invoices-all',
    templateUrl: 'app/invoices-all/invoices-all.component.html',
    encapsulation: ViewEncapsulation.None
})

export class InvoicesAllComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}