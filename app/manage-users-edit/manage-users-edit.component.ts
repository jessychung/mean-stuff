import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'manage-users-edit',
    templateUrl: 'app/manage-users-edit/manage-users-edit.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ManageUsersEditComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}