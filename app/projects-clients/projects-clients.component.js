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
var ProjectsClientsComponent = (function () {
    function ProjectsClientsComponent(location, router) {
        this.location = location;
        this.router = router;
    }
    ProjectsClientsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProjectsClientsComponent.prototype.checkIfEdit = function () {
        console.log(this.router.url);
    };
    return ProjectsClientsComponent;
}());
ProjectsClientsComponent = __decorate([
    core_1.Component({
        selector: 'projects-clients',
        templateUrl: 'app/projects-clients/projects-clients.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router])
], ProjectsClientsComponent);
exports.ProjectsClientsComponent = ProjectsClientsComponent;
//# sourceMappingURL=projects-clients.component.js.map