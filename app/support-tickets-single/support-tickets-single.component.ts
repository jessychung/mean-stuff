import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'support-tickets-single',
    templateUrl: 'app/support-tickets-single/support-tickets-single.component.html',
    encapsulation: ViewEncapsulation.None
})

export class SupportTicketsSingleComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}