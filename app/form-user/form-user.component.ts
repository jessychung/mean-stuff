import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'form-user',
    templateUrl: 'app/form-user/form-user.component.html',
    encapsulation: ViewEncapsulation.None
})

export class FormUserComponent {

    userForm : FormGroup;

    emailRegex = /@/;

    router = this._router;

    constructor(fb: FormBuilder, private location: Location, private _router: Router) {
        this.userForm = fb.group({
            'userFname': ['', Validators.required]
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

    isAddNew():boolean {
        return this.router.url == 'main/manage-users-single';
    }

}