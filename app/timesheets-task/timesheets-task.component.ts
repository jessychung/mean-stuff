import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'timesheets-task',
    templateUrl: 'app/timesheets-task/timesheets-task.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TimesheetsTaskComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}