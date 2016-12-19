import { Component, ViewEncapsulation} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component ({
    selector: 'timesheets',
    templateUrl: 'app/timesheets/timesheets.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TimesheetsComponent {

    constructor( private location: Location, private _router: Router) {

    }

    router = this._router;

    checkifactive():boolean {
        return this.router.url.indexOf('timesheets-clients') != -1;
    }

    goBack(): void {
        this.location.back();
    }
}