import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Location }                 from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {vectorleapService} from "../vectorleap.service";


@Component ({
    selector: 'vectorleap-manage',
    templateUrl: 'app/vectorleap-manage/vectorleap-manage.component.html',
    providers: [vectorleapService],
    encapsulation: ViewEncapsulation.None
})

export class VectorleapManageComponent implements OnInit {

    VectorleapInstances = [];
    vectorleapid;

    constructor(
        private VectorleapService: vectorleapService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {

    }

    ngOnInit() {
        if (localStorage.getItem('currentUser')) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const currentUserToken = currentUser.token;

            this.activatedRoute.params.subscribe(params => {
                this.vectorleapid = params; //get the project id from url

                this.VectorleapService.getOneInstance(this.vectorleapid.id)
                    .subscribe(res => {
                        this.VectorleapInstances.push(res);
                    })
            });


        }



    }

    goBack(): void {
        this.location.back();
    }

}