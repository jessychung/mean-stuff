import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

@Component ({
    selector: 'timesheets-clients-addedit',
    templateUrl: 'app/timesheets-clients-addedit/timesheets-clients-addedit.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TimesheetsClientsAddeditComponent {
    constructor(
        private location: Location,
        private router: Router
    ) {
    }

    checkIfEdit():boolean {
        return this.router.url == "/main/timesheets/timesheets-clients-edit/1";
    }

    goBack(): void {
        this.location.back();
    }
}