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
var forms_1 = require("@angular/forms");
var user_1 = require("../user");
var testService_service_1 = require("../testService.service");
var ManageUsersAllComponent = (function () {
    function ManageUsersAllComponent(location, _router, TestService) {
        var _this = this;
        this.location = location;
        this._router = _router;
        this.TestService = TestService;
        this.newform = false;
        this.users = [];
        this.sort = [];
        this.pageSize = 2;
        this.skip = 0;
        this.rolelist = [
            "Admin", "User"
        ];
        this.defaultrole = "User";
        // init dialog hidden
        this.ConfirmDialogOpened = false;
        this.EditDialogOpened = false;
        this.editForm = this.getnewform();
        this.TestService.getUsers()
            .subscribe(function (tasks) {
            console.log(tasks);
            _this.testData = tasks;
            _this.loadProducts();
        });
    }
    ManageUsersAllComponent.prototype.goBack = function () {
        this.location.back();
    };
    ManageUsersAllComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.loadProducts();
    };
    ManageUsersAllComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.loadProducts();
    };
    ManageUsersAllComponent.prototype.loadProducts = function () {
        this.gridView = {
            data: this.testData.slice(this.skip, this.skip + this.pageSize),
            total: this.testData.length
        };
    };
    ManageUsersAllComponent.prototype.getnewform = function () {
        return new forms_1.FormGroup({
            'firstname': new forms_1.FormControl("", forms_1.Validators.required),
            'lastname': new forms_1.FormControl("", forms_1.Validators.required),
            'email': new forms_1.FormControl("", forms_1.Validators.required),
            'role': new forms_1.FormControl("", forms_1.Validators.required)
        });
    };
    ManageUsersAllComponent.prototype.openConfirmDialog = function (data) {
        this.ConfirmDialogOpened = true;
        this.userdata = data;
    };
    ManageUsersAllComponent.prototype.openEditDialog = function (data) {
        this.EditDialogOpened = true;
        this.userdata = data;
    };
    ManageUsersAllComponent.prototype.openAddNew = function () {
        this.EditDialogOpened = true;
        this.userdata = new user_1.UserType();
        this.newform = true;
        this.editForm = this.getnewform();
    };
    ManageUsersAllComponent.prototype.closeConfirmDialog = function () {
        this.ConfirmDialogOpened = false;
    };
    ManageUsersAllComponent.prototype.closeEditDialog = function () {
        this.EditDialogOpened = false;
        this.newform = false;
    };
    ManageUsersAllComponent.prototype.addUser = function () {
        event.preventDefault();
        var newUser = {
            userAvatar: this.editForm.value.firstname.charAt(0).toUpperCase() + this.editForm.value.lastname.charAt(0).toUpperCase(),
            userAvatarColour: "#f2f2f2",
            userFname: this.editForm.value.firstname,
            userLname: this.editForm.value.lastname,
            userEmail: this.editForm.value.email,
            userRole: this.editForm.value.role
        };
        this.TestService.createUser(newUser)
            .subscribe();
    };
    return ManageUsersAllComponent;
}());
ManageUsersAllComponent = __decorate([
    core_1.Component({
        selector: 'manage-users-all',
        templateUrl: 'app/manage-users-all/manage-users-all.component.html',
        providers: [testService_service_1.testService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router,
        testService_service_1.testService])
], ManageUsersAllComponent);
exports.ManageUsersAllComponent = ManageUsersAllComponent;
//# sourceMappingURL=manage-users-all.component.js.map