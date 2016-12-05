import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'timesheets-single',
    templateUrl: 'app/timesheets-single/timesheets-single.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TimesheetsSingleComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}