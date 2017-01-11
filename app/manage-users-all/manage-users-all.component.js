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
var kendo_data_query_1 = require("@progress/kendo-data-query");
var user_1 = require("../user");
var userService_service_1 = require("../userService.service");
var ManageUsersAllComponent = (function () {
    function ManageUsersAllComponent(location, _router, UserService) {
        this.location = location;
        this._router = _router;
        this.UserService = UserService;
        this.newform = false;
        this.users = [];
        this.sort = [];
        this.pageSize = 10;
        this.skip = 0;
        this.rolelist = [
            "Admin", "User"
        ];
        // init dialog hidden
        this.ConfirmDialogOpened = false;
        this.EditDialogOpened = false;
        this.editForm = this.getnewform();
        this.reloadUsers();
    }
    ManageUsersAllComponent.prototype.goBack = function () {
        this.location.back();
    };
    ManageUsersAllComponent.prototype.reloadUsers = function () {
        var _this = this;
        this.UserService.getUsers()
            .subscribe(function (tasks) {
            _this.testData = tasks;
            _this.loadProducts();
        });
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
            data: kendo_data_query_1.orderBy(this.testData, this.sort),
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
        this.userdata.userRole = "User";
    };
    ManageUsersAllComponent.prototype.closeConfirmDialog = function () {
        this.ConfirmDialogOpened = false;
    };
    ManageUsersAllComponent.prototype.closeEditDialog = function () {
        this.EditDialogOpened = false;
        this.newform = false;
    };
    ManageUsersAllComponent.prototype.addUser = function () {
        var _this = this;
        event.preventDefault();
        this.EditDialogOpened = false;
        this.newform = false;
        var newUser = {
            userAvatar: this.editForm.value.firstname.charAt(0).toUpperCase() + this.editForm.value.lastname.charAt(0).toUpperCase(),
            userAvatarColour: '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
            userFname: this.editForm.value.firstname,
            userLname: this.editForm.value.lastname,
            userEmail: this.editForm.value.email,
            userRole: this.editForm.value.role
        };
        this.UserService.createUser(newUser)
            .subscribe(function () {
            _this.reloadUsers();
        });
    };
    ManageUsersAllComponent.prototype.deleteUser = function (id) {
        this.UserService.deleteUser(id)
            .subscribe(function (data) {
            console.log(data);
        });
        this.reloadUsers();
        this.ConfirmDialogOpened = false;
    };
    ManageUsersAllComponent.prototype.updateUser = function (id) {
        console.log(this.userdata.userAvatarColour);
        var updatedUser = {
            _id: id,
            userAvatar: this.editForm.value.firstname.charAt(0).toUpperCase() + this.editForm.value.lastname.charAt(0).toUpperCase(),
            userAvatarColour: this.userdata.userAvatarColour,
            userFname: this.editForm.value.firstname,
            userLname: this.editForm.value.lastname,
            userEmail: this.editForm.value.email,
            userRole: this.editForm.value.role
        };
        this.UserService.updateUser(updatedUser)
            .subscribe();
        this.reloadUsers();
        this.EditDialogOpened = false;
    };
    return ManageUsersAllComponent;
}());
ManageUsersAllComponent = __decorate([
    core_1.Component({
        selector: 'manage-users-all',
        templateUrl: 'app/manage-users-all/manage-users-all.component.html',
        providers: [userService_service_1.userService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router,
        userService_service_1.userService])
], ManageUsersAllComponent);
exports.ManageUsersAllComponent = ManageUsersAllComponent;
//# sourceMappingURL=manage-users-all.component.js.map