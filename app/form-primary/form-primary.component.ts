import { Component, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'form-primary',
    templateUrl: 'app/form-primary/form-primary.component.html',
    encapsulation: ViewEncapsulation.None
})

export class FormPrimaryComponent {

    @Input() currentId:string;

    primaryForm : FormGroup;

    emailRegex = /@/;

    router = this._router;

    constructor(fb: FormBuilder, private location: Location, private _router: Router) {
        this.primaryForm = fb.group({
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

    isSignup():boolean {
        return this.router.url == 'main/address/address-primary';
    }

}