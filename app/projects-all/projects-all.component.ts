import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

import {projectsService} from "../projects.service";

@Component ({
    selector: 'projects-all',
    templateUrl: 'app/projects-all/projects-all.component.html',
    providers: [projectsService],
    encapsulation: ViewEncapsulation.None
})

export class ProjectsAllComponent implements OnInit{

    projectsAll;

    constructor(
        private location: Location,
        private ProjectsService: projectsService
    ) {
    }

    ngOnInit() {
        if (localStorage.getItem('currentUser')) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const currentUserToken = currentUser.token;

            this.ProjectsService.getProjects(currentUserToken)
                .subscribe(res => {
                    this.projectsAll = res;
                    this.loadProducts();
                })

        }
    }


    goBack(): void {
        this.location.back();
    }

    private sort: SortDescriptor[] = [];
    private gridView: GridDataResult;

    private pageSize: number = 10;
    private skip: number = 0;

    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: orderBy(this.projectsAll, this.sort),
            total: this.projectsAll.length
        };
    }


}