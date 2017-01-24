import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'projects-task',
    templateUrl: 'app/projects-task/projects-task.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ProjectsTaskComponent {
    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
}