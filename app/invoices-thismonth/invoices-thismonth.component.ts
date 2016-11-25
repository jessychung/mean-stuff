import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'invoices-all',
    templateUrl: 'app/invoices-thismonth/invoices-thismonth.component.html',
    encapsulation: ViewEncapsulation.None
})

export class InvoicesThismonthComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}