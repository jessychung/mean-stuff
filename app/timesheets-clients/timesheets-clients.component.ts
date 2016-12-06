import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'timesheets-clients',
    templateUrl: 'app/timesheets-clients/timesheets-clients.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TimesheetsClientsComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}