import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'manage-users-display',
    templateUrl: 'app/manage-users-display/manage-users-display.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ManageUsersDisplayComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}