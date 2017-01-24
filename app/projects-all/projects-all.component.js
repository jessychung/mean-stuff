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
var common_1 = require("@angular/common");
var kendo_data_query_1 = require("@progress/kendo-data-query");
var projects_service_1 = require("../projects.service");
var ProjectsAllComponent = (function () {
    function ProjectsAllComponent(location, ProjectsService) {
        this.location = location;
        this.ProjectsService = ProjectsService;
        this.sort = [];
        this.pageSize = 10;
        this.skip = 0;
    }
    ProjectsAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var currentUserToken = currentUser.token;
            this.ProjectsService.getProjects(currentUserToken)
                .subscribe(function (res) {
                _this.projectsAll = res;
                _this.loadProducts();
            });
        }
    };
    ProjectsAllComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProjectsAllComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.loadProducts();
    };
    ProjectsAllComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.loadProducts();
    };
    ProjectsAllComponent.prototype.loadProducts = function () {
        this.gridView = {
            data: kendo_data_query_1.orderBy(this.projectsAll, this.sort),
            total: this.projectsAll.length
        };
    };
    return ProjectsAllComponent;
}());
ProjectsAllComponent = __decorate([
    core_1.Component({
        selector: 'projects-all',
        templateUrl: 'app/projects-all/projects-all.component.html',
        providers: [projects_service_1.projectsService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [common_1.Location,
        projects_service_1.projectsService])
], ProjectsAllComponent);
exports.ProjectsAllComponent = ProjectsAllComponent;
//# sourceMappingURL=projects-all.component.js.map