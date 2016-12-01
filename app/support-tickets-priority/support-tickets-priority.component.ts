import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'support-tickets-priority',
    templateUrl: 'app/support-tickets-priority/support-tickets-priority.component.html',
    encapsulation: ViewEncapsulation.None
})

export class SupportTicketsPriorityComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}