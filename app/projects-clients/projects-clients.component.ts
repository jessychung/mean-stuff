import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

@Component ({
    selector: 'projects-clients',
    templateUrl: 'app/projects-clients/projects-clients.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ProjectsClientsComponent {
    constructor(
        private location: Location,
        private router: Router
    ) {}

    goBack(): void {
        this.location.back();
    }

    checkIfEdit():void {
        console.log(this.router.url);
    }

    // onClick () {
    //     this.router.navigate(['/component-two', 456]);
    // }
}