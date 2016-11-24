import { Component, ViewEncapsulation } from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'resetpassword',
    templateUrl: 'app/resetpassword/resetpassword.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ResetpasswordComponent {

    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}