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
var router_1 = require("@angular/router");
var projects_service_1 = require("../projects.service");
var ProjectsComponent = (function () {
    function ProjectsComponent(location, _router, ProjectsService) {
        this.location = location;
        this._router = _router;
        this.ProjectsService = ProjectsService;
        this.projectsNames = [];
        this.router = this._router;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var currentUserToken = currentUser.token;
            this.ProjectsService.getProjects(currentUserToken)
                .subscribe(function (res) {
                if (res) {
                    _this.projectsNames = res;
                }
            });
        }
    };
    // checkifactive():boolean {
    //     return this.router.url.indexOf('projects-clients') != -1;
    // }
    ProjectsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    core_1.Component({
        selector: 'projects',
        templateUrl: 'app/projects/projects.component.html',
        providers: [projects_service_1.projectsService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router,
        projects_service_1.projectsService])
], ProjectsComponent);
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map