import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {authService} from "../auth.service";

import { AccountType } from "../account";
import {error} from "util";


@Component({
    selector: 'login-form',
    templateUrl: 'app/login-form/login-form.component.html',
    providers: [authService],
    encapsulation: ViewEncapsulation.None
})

export class LoginFormComponent {

    loginForm : FormGroup;
    public badLogin:boolean = false;

    private currentAccount;

    constructor(fb: FormBuilder,
                private AuthService: authService,
                private router: Router) {
        this.loginForm = fb.group({
            'sgEmail': [null, Validators.required],
            'sgPassword' : [null, Validators.required]
        })
    }

    submitted = false;

    submitForm(value: any):void {
        this.AuthService.login(value.sgEmail, value.sgPassword)
            .subscribe(
                result => {
                    if(result === true) {
                        this.router.navigate(['/dashboard'])
                    } else {
                        console.log('bad login')
                    }
                });
    }

}