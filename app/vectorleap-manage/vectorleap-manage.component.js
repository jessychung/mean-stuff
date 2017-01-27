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
var vectorleap_service_1 = require("../vectorleap.service");
var VectorleapManageComponent = (function () {
    function VectorleapManageComponent(VectorleapService, activatedRoute, location) {
        this.VectorleapService = VectorleapService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.VectorleapInstances = [];
    }
    VectorleapManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var currentUserToken = currentUser.token;
            this.activatedRoute.params.subscribe(function (params) {
                _this.vectorleapid = params; //get the project id from url
                _this.VectorleapService.getOneInstance(_this.vectorleapid.id)
                    .subscribe(function (res) {
                    _this.VectorleapInstances.push(res);
                });
            });
        }
    };
    VectorleapManageComponent.prototype.goBack = function () {
        this.location.back();
    };
    return VectorleapManageComponent;
}());
VectorleapManageComponent = __decorate([
    core_1.Component({
        selector: 'vectorleap-manage',
        templateUrl: 'app/vectorleap-manage/vectorleap-manage.component.html',
        providers: [vectorleap_service_1.vectorleapService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [vectorleap_service_1.vectorleapService,
        router_1.ActivatedRoute,
        common_1.Location])
], VectorleapManageComponent);
exports.VectorleapManageComponent = VectorleapManageComponent;
//# sourceMappingURL=vectorleap-manage.component.js.map