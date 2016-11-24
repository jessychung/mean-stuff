import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'login-form',
    templateUrl: 'app/login-form/login-form.component.html',
    encapsulation: ViewEncapsulation.None
})

export class LoginFormComponent {

    loginForm : FormGroup;

    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            'sgEmail': [null, Validators.required],
            'sgPassword' : [null, Validators.required]
        })
    }

    submitted = false;

    submitForm(value: any):void {
        console.log(value);
        this.submitted = true;
        console.log(this.submitted);
    }

}