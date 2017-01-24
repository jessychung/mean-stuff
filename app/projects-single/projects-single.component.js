"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var kendo_data_query_1 = require("@progress/kendo-data-query");
var projects_service_1 = require("../projects.service");
var timesheets_service_1 = require("../timesheets.service");
var ProjectsSingleComponent = (function () {
    function ProjectsSingleComponent(location, ProjectsService, TimesheetsService, activatedRoute) {
        this.location = location;
        this.ProjectsService = ProjectsService;
        this.TimesheetsService = TimesheetsService;
        this.activatedRoute = activatedRoute;
        this.projectsAll = [];
        this.empty = false;
        this.sort = [];
        this.pageSize = 10;
        this.skip = 0;
    }
    ProjectsSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            this.activatedRoute.params.subscribe(function (params) {
                _this.projectId = params; //get the project id from url
            });
            this.ProjectsService.getOneProject(this.projectId.id)
                .subscribe(function (res) {
                _this.projectsAll.push(res);
            });
            this.TimesheetsService.getTimesheets(this.projectId.id)
                .subscribe(function (res) {
                if (res.length === 0) {
                    _this.empty = true;
                }
                else {
                    _this.timesheetsAll = res;
                    _this.loadProducts();
                }
            });
            console.log(this.projectId.id);
            console.log(this.timesheetsAll);
        }
    };
    ProjectsSingleComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.loadProducts();
    };
    ProjectsSingleComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.loadProducts();
    };
    ProjectsSingleComponent.prototype.loadProducts = function () {
        this.gridView = {
            data: kendo_data_query_1.orderBy(this.timesheetsAll, this.sort),
            total: this.timesheetsAll.length
        };
    };
    ProjectsSingleComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ProjectsSingleComponent;
}());
ProjectsSingleComponent = __decorate([
    core_1.Component({
        selector: 'projects-single',
        templateUrl: 'app/projects-single/projects-single.component.html',
        providers: [projects_service_1.projectsService, timesheets_service_1.timesheetsService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [common_1.Location,
        projects_service_1.projectsService,
        timesheets_service_1.timesheetsService,
        router_1.ActivatedRoute])
], ProjectsSingleComponent);
exports.ProjectsSingleComponent = ProjectsSingleComponent;
//# sourceMappingURL=projects-single.component.js.map