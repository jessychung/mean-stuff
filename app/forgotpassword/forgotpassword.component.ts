import { Component, ViewEncapsulation } from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'forgotpassword',
    templateUrl: 'app/forgotpassword/forgotpassword.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ForgotpasswordComponent {

    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}