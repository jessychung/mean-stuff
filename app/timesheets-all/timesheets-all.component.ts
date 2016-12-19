import { Component, ViewEncapsulation } from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'timesheets-all',
    templateUrl: 'app/timesheets-all/timesheets-all.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TimesheetsAllComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}