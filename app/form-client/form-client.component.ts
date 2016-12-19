import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'form-client',
    templateUrl: 'app/form-client/form-client.component.html',
    encapsulation: ViewEncapsulation.None
})

export class FormClientComponent {

    clientForm : FormGroup;

    emailRegex = /@/;

    router = this._router;

    constructor(fb: FormBuilder, private location: Location, private _router: Router) {
        this.clientForm = fb.group({
            'ssoclientname': ['', Validators.required],
            'ssomaincontact': ['', Validators.required],
            'ssoclientaddress': ['', Validators.required],
            'ssoclienttel': ['', Validators.required],
            'ssoclientemail' : ['', Validators.compose([
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