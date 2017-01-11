import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { accountService } from "../accountService.service";
import { AccountType } from "../account";

@Component({
    selector: 'login-form',
    templateUrl: 'app/login-form/login-form.component.html',
    providers: [accountService],
    encapsulation: ViewEncapsulation.None
})

export class LoginFormComponent {

    loginForm : FormGroup;

    private currentAccount;

    constructor(fb: FormBuilder, private AccountService: accountService) {
        this.loginForm = fb.group({
            'sgEmail': [null, Validators.required],
            'sgPassword' : [null, Validators.required]
        })
    }

    submitted = false;

    submitForm(value: any):void {
        this.AccountService.getAccount(value.sgEmail)
            .subscribe(data => {
                this.currentAccount = data;
                if(value.sgPassword === this.currentAccount.accountPassword) {
                    console.log('good!')
                } else  {
                    console.log('wrong password')
                }
            });
    }

}