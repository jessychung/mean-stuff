import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

@Component ({
    selector: 'timesheets-clients',
    templateUrl: 'app/timesheets-clients/timesheets-clients.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TimesheetsClientsComponent {
    constructor(
        private location: Location,
        private router: Router
    ) {}

    goBack(): void {
        this.location.back();
    }

    checkIfEdit():void {
        console.log(this.router.url);
    }

    // onClick () {
    //     this.router.navigate(['/component-two', 456]);
    // }
}