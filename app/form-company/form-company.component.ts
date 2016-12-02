import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CountryList } from '../list/country';

@Component({
    selector: 'form-company',
    templateUrl: 'app/form-company/form-company.component.html',
    encapsulation: ViewEncapsulation.None
})

export class FormCompanyComponent {

    companyForm : FormGroup;

    router = this._router;

    constructor(fb: FormBuilder, private location: Location, private _router: Router) {
        this.companyForm = fb.group({
            'ssoCname': ['', Validators.required],
            'ssoCstreet1': ['', Validators.required],
            'ssoCstreet2': [''],
            'ssoCcity': ['', Validators.required],
            'ssoCprovince': ['', Validators.required],
            'ssoCcountry': ['', Validators.required],
            'ssoCpostal': ['', Validators.required],
            'ssoCtel': ['', Validators.required]
        });
        console.log(this.router.url)
    }

    submitted = false;

    submitForm(value: any):void {
        console.log(value);
        this.submitted = true;
        console.log(this.submitted);
    }

    countrylist = new CountryList();

    isSignup():boolean {
        return
    }

    signup: boolean = true;

}