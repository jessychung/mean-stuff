import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { accountService } from "../accountService.service";

import { AccountType } from "../account";
import {error} from "util";

@Component({
    selector: 'login-form',
    templateUrl: 'app/login-form/login-form.component.html',
    providers: [accountService],
    encapsulation: ViewEncapsulation.None
})

export class LoginFormComponent {

    loginForm : FormGroup;
    public badLogin:boolean = false;

    private currentAccount;

    constructor(fb: FormBuilder,
                private AccountService: accountService,
                private router: Router) {
        this.loginForm = fb.group({
            'sgEmail': [null, Validators.required],
            'sgPassword' : [null, Validators.required]
        })
    }

    submitted = false;

    submitForm(value: any):void {
        this.AccountService.getAccount(value.sgEmail)
            .subscribe(
                data => {
                this.currentAccount = data;

                if(data != null) {
                    if(value.sgPassword === this.currentAccount.accountPassword) {
                        this.router.navigate(['/dashboard'])
                    } else {
                        this.badLogin = true;
                    }
                } else {
                    this.badLogin = true;
                }
            });
    }

}