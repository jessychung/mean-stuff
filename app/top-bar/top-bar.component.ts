import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {AccountType} from "../account";
import {currentUserService} from "../currentUser.service";


@Component({
    selector: 'top-bar',
    templateUrl: 'app/top-bar/top-bar.component.html',
    providers: [currentUserService],
    encapsulation: ViewEncapsulation.None
})

export class TopbarComponent implements OnInit{

    public currentUser:Array<AccountType> = [];

    constructor(
        private CurrentUserService: currentUserService
    ) {
    }

    ngOnInit() {

        if (localStorage.getItem('currentUser')) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const currentUserEmail = currentUser.accountEmail;

            this.CurrentUserService.getCurrentUser(currentUserEmail)
                .subscribe(res => {

                    this.currentUser.push(res);
                })

        }
    }
}