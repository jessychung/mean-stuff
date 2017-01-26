import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {projectsService} from "../projects.service";

@Component ({
    selector: 'projects',
    templateUrl: 'app/projects/projects.component.html',
    providers: [projectsService],
    encapsulation: ViewEncapsulation.None
})

export class ProjectsComponent implements OnInit {

    projectsNames = [];

    constructor( private location: Location,
                 private _router: Router,
                 private ProjectsService: projectsService) {



    }

    ngOnInit() {

        if (localStorage.getItem('currentUser')) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const currentUserToken = currentUser.token;

            this.ProjectsService.getProjects(currentUserToken)
                .subscribe(res => {
                    if(res) {
                        this.projectsNames = res;
                    }
                })



        }

    }

    router = this._router;
    // checkifactive():boolean {
    //     return this.router.url.indexOf('projects-clients') != -1;
    // }



    goBack(): void {
        this.location.back();
    }

}