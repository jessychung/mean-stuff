import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'projects-single',
    templateUrl: 'app/projects-single/projects-single.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ProjectsSingleComponent {

    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }

}