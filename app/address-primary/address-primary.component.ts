import {Component, ViewEncapsulation, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location }                 from '@angular/common';
import { CountryList } from '../list/country';
import {currentUserService} from "../currentUser.service";
import {AccountType} from "../account";

@Component ({
    selector: 'address-primary',
    templateUrl: 'app/address-primary/address-primary.component.html',
    providers: [currentUserService],
    encapsulation: ViewEncapsulation.None
})

export class AddressPrimaryComponent implements OnInit {

    signupForm : FormGroup;

    public currentUser = [];

    public currentId:string;

    constructor( private location: Location, private CurrentUserService: currentUserService) {
    }

    ngOnInit() {

        if (localStorage.getItem('currentUser')) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const currentUserEmail = currentUser.accountEmail;

            this.CurrentUserService.getCurrentUser(currentUserEmail)
                .subscribe(res => {
                    this.currentUser.push(res);
                    this.currentId = this.currentUser[0]._id;
                })

        }
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