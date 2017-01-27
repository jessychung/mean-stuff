import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {vectorleapService} from "../vectorleap.service";


@Component ({
    selector: 'vectorleap-all',
    templateUrl: 'app/vectorleap-all/vectorleap-all.component.html',
    providers: [vectorleapService],
    encapsulation: ViewEncapsulation.None
})

export class VectorleapAllComponent implements OnInit {

    VectorleapInstances = [];

    constructor(
        private VectorleapService: vectorleapService
    ) {

    }

    ngOnInit() {
        if (localStorage.getItem('currentUser')) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const currentUserToken = currentUser.token;

            this.VectorleapService.getInstances(currentUserToken)
                .subscribe(res => {
                    this.VectorleapInstances = res;
                })

        }

    }

}