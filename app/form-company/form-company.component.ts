import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CountryList } from '../list/country';
import {addressService} from "../address.service";

@Component({
    selector: 'form-company',
    templateUrl: 'app/form-company/form-company.component.html',
    providers: [addressService],
    encapsulation: ViewEncapsulation.None
})

export class FormCompanyComponent implements OnInit{

    @Input('currentId') CurrentId:string;

    companyForm : FormGroup;

    public address = [];

    router = this._router;

    constructor(fb: FormBuilder,
                private location: Location,
                private _router: Router,
                private  AddressService: addressService) {
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
    }

    ngOnInit() {

        if (localStorage.getItem('currentUser')) {

            this.AddressService.getAddress(this.CurrentId)
                .subscribe(res => {
                    this.address.push(res);
                })

        }

    }

    submitted = false;

    submitForm(value: any):void {

        let updatedAddress = {
            accountId: this.CurrentId,
            cName: this.companyForm.value.ssoCname,
            cStreet1: this.companyForm.value.ssoCstreet1,
            cStreet2: this.companyForm.value.ssoCstreet2,
            cCity: this.companyForm.value.ssoCcity,
            cProvince: this.companyForm.value.ssoCprovince,
            cCountry: this.companyForm.value.ssoCcountry,
            cPostal: this.companyForm.value.ssoCpostal,
            cTel:  this.companyForm.value.ssoCtel
        };

        if(this.companyForm.valid) {
            this.AddressService.updateAddress(updatedAddress)
                .subscribe();
            this.submitted = true;
        } else {
            console.log("not valid");
        }

    }

    countrylist = new CountryList();

    isSignup():boolean {
        return this.router.url == 'main/address/address-company';
    }

}