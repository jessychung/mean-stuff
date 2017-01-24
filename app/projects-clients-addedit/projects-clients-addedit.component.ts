import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

@Component ({
    selector: 'projects-clients-addedit',
    templateUrl: 'app/projects-clients-addedit/projects-clients-addedit.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ProjectsClientsAddeditComponent {
    constructor(
        private location: Location,
        private router: Router
    ) {
    }

    checkIfEdit():boolean {
        return this.router.url == "/main/projects/projects-clients-edit/1";
    }

    goBack(): void {
        this.location.back();
    }
}