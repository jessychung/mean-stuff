import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form-two/signup-form-two.component.html',
    encapsulation: ViewEncapsulation.None
})

export class SignupFormTwoComponent {

    signupForm2 : FormGroup;

    emailRegex = /@/;

    constructor(fb: FormBuilder, private location: Location) {
        this.signupForm2 = fb.group({
            'ssoFname': ['', Validators.required],
            'ssoLname': ['', Validators.required],
            'ssoTel': ['', Validators.required],
            'ssoCell': ['', Validators.required],
            'ssoEmail' : ['', Validators.compose([
                Validators.required,
                Validators.pattern(this.emailRegex)
            ])]
        })
    }

    submitted = false;

    submitForm(value: any):void {
        console.log(value);
        this.submitted = true;
        console.log(this.submitted);
    }

    goBack(): void {
        this.location.back();
    }

}