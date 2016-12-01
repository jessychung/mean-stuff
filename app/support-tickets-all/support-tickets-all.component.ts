import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'support-tickets-all',
    templateUrl: 'app/support-tickets-all/support-tickets-all.component.html',
    encapsulation: ViewEncapsulation.None
})

export class SupportTicketsAllComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}