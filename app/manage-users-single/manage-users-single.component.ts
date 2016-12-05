import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'manage-users-single',
    templateUrl: 'app/manage-users-single/manage-users-single.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ManageUsersSingleComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}