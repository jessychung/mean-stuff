import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Location }                 from '@angular/common';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

import {projectsService} from "../projects.service";
import {timesheetsService} from "../timesheets.service";

@Component ({
    selector: 'projects-single',
    templateUrl: 'app/projects-single/projects-single.component.html',
    providers: [projectsService, timesheetsService],
    encapsulation: ViewEncapsulation.None
})

export class ProjectsSingleComponent implements OnInit{

    projectsAll = [];
    timesheetsAll;
    projectId;

    empty:boolean = false;

    constructor(
        private location: Location,
        private ProjectsService: projectsService,
        private TimesheetsService: timesheetsService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {

        if (localStorage.getItem('currentUser')) {

            this.activatedRoute.params.subscribe(params => {
                this.projectId = params; //get the project id from url
            });

            this.ProjectsService.getOneProject(this.projectId.id)
                .subscribe(res => {
                    this.projectsAll.push(res);
                });

            this.TimesheetsService.getTimesheets(this.projectId.id)
                .subscribe(res => {
                    if(res.length === 0) {
                        this.empty = true;
                    } else {
                        this.timesheetsAll = res;
                        this.loadProducts();
                    }
                });

            console.log(this.projectId.id);
            console.log(this.timesheetsAll);

        }

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
            data: orderBy(this.timesheetsAll, this.sort),
            total: this.timesheetsAll.length
        };
    }


    goBack(): void {
        this.location.back();
    }

}