import { Component, ViewEncapsulation} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component ({
    selector: 'projects',
    templateUrl: 'app/projects/projects.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ProjectsComponent {

    constructor( private location: Location, private _router: Router) {

    }

    router = this._router;

    checkifactive():boolean {
        return this.router.url.indexOf('projects-clients') != -1;
    }

    goBack(): void {
        this.location.back();
    }

}