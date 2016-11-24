import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryList } from 'app/list/country';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form-one/signup-form-one.component.html',
    encapsulation: ViewEncapsulation.None
})

export class SignupFormOneComponent {

    signupForm : FormGroup;

    constructor(fb: FormBuilder) {
        this.signupForm = fb.group({
            'ssoCname': ['', Validators.required],
            'ssoCstreet1': ['', Validators.required],
            'ssoCstreet2': [''],
            'ssoCcity': ['', Validators.required],
            'ssoCprovince': ['', Validators.required],
            'ssoCcountry': ['', Validators.required],
            'ssoCpostal': ['', Validators.required],
            'ssoCtel': ['', Validators.required]
        })
    }

    submitted = false;

    submitForm(value: any):void {
        console.log(value);
        this.submitted = true;
        console.log(this.submitted);
    }

    countrylist = new CountryList();

}