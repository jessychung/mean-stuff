import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {vectorleapService} from "../vectorleap.service";
import {userService} from "../userService.service";


@Component ({
    selector: 'vectorleap-all',
    templateUrl: 'app/vectorleap-all/vectorleap-all.component.html',
    providers: [vectorleapService, userService],
    encapsulation: ViewEncapsulation.None
})

export class VectorleapAllComponent implements OnInit {

    VectorleapInstances = [];

    constructor(
        private VectorleapService: vectorleapService,
        private UserService: userService
    ) {

    }

    ngOnInit() {
        if (localStorage.getItem('currentUser')) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const currentUserToken = currentUser.token;

            this.VectorleapService.getInstances(currentUserToken)
                .subscribe(res => {
                    this.VectorleapInstances = res;
                    for(var i = 0; i < this.VectorleapInstances.length; i++) {
                        this.UserService.getUsers(this.VectorleapInstances[i]._id)
                            .subscribe(res => {
                                console.log(res);
                            })
                    }
                })

        }

    }

}