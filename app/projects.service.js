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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var projectsService = (function () {
    function projectsService(http) {
        this.http = http;
        console.log('getting the projects...');
    }
    // get data
    projectsService.prototype.getProjects = function (token) {
        return this.http.get('/api/projects/' + token)
            .map(function (res) { return res.json(); });
    };
    projectsService.prototype.createProjects = function (newUser) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/projects', JSON.stringify(newUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    projectsService.prototype.deleteProjects = function (id) {
        return this.http.delete('/api/projects/' + id)
            .map(function (res) { return res.json(); });
    };
    projectsService.prototype.updateProjects = function (updatedUser) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/projects/' + updatedUser._id, JSON.stringify(updatedUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return projectsService;
}());
projectsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], projectsService);
exports.projectsService = projectsService;
//# sourceMappingURL=projects.service.js.map