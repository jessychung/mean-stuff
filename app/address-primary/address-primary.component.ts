import { Component, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location }                 from '@angular/common';
import { CountryList } from '../list/country';

@Component ({
    selector: 'address-primary',
    templateUrl: 'app/address-primary/address-primary.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AddressPrimaryComponent {


    signupForm : FormGroup;

    constructor(fb: FormBuilder, private location: Location) {
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

    goBack(): void {
        this.location.back();
    }
}