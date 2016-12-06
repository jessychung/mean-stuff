import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'invoices-custom',
    templateUrl: 'app/invoices-custom/invoices-custom.component.html',
    encapsulation: ViewEncapsulation.None
})

export class InvoicesCustomComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}