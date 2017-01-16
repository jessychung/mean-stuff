import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {currentUserService} from "../currentUser.service";
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {AccountType} from "../account";

@Component ({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    providers: [currentUserService],
    encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit {

    public currentUser:Array<AccountType> = [];

    constructor(
        private http: Http,
        private CurrentUserService: currentUserService) {

    }

    ngOnInit() {

        if (localStorage.getItem('currentUser')) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const currentUserEmail = currentUser.accountEmail;

            this.CurrentUserService.getCurrentUser(currentUserEmail)
                .subscribe(res => {
                    this.currentUser = res;
                    console.log(this.currentUser);
                })

        }
    }


}