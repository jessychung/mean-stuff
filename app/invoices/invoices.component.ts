import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'invoices',
    templateUrl: 'app/invoices/invoices.component.html',
    encapsulation: ViewEncapsulation.None
})

export class InvoicesComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}