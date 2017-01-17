import { Component, ViewEncapsulation, Input, OnInit} from '@angular/core';
import { Location }                 from '@angular/common';
import {currentUserService} from "../currentUser.service";

@Component ({
    selector: 'address-company',
    templateUrl: 'app/address-company/address-company.component.html',
    providers: [currentUserService],
    encapsulation: ViewEncapsulation.None
})

export class AddressCompanyComponent implements OnInit {

    public currentUser = [];
    public currentId:string;

    constructor(
        private location: Location,
        private CurrentUserService: currentUserService
    ) {}

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

    goBack(): void {
        this.location.back();
    }

}