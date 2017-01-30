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
var vectorleap_service_1 = require("../vectorleap.service");
var userService_service_1 = require("../userService.service");
var VectorleapAllComponent = (function () {
    function VectorleapAllComponent(VectorleapService, UserService) {
        this.VectorleapService = VectorleapService;
        this.UserService = UserService;
        this.VectorleapInstances = [];
    }
    VectorleapAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var currentUserToken = currentUser.token;
            this.VectorleapService.getInstances(currentUserToken)
                .subscribe(function (res) {
                _this.VectorleapInstances = res;
                var _loop_1 = function (i) {
                    _this.UserService.getUsers(_this.VectorleapInstances[i]._id)
                        .subscribe(function (res) {
                        _this.VectorleapInstances[i].vectorleapUsers = res.length;
                        console.log(_this.VectorleapInstances);
                    });
                };
                //count how many users each instance has
                for (var i = 0; i < _this.VectorleapInstances.length; i++) {
                    _loop_1(i);
                }
            });
        }
    };
    return VectorleapAllComponent;
}());
VectorleapAllComponent = __decorate([
    core_1.Component({
        selector: 'vectorleap-all',
        templateUrl: 'app/vectorleap-all/vectorleap-all.component.html',
        providers: [vectorleap_service_1.vectorleapService, userService_service_1.userService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [vectorleap_service_1.vectorleapService,
        userService_service_1.userService])
], VectorleapAllComponent);
exports.VectorleapAllComponent = VectorleapAllComponent;
//# sourceMappingURL=vectorleap-all.component.js.map