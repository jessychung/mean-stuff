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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var accounts_service_1 = require("../accounts.service");
var FormPrimaryComponent = (function () {
    function FormPrimaryComponent(fb, location, _router, AccountsService) {
        this.location = location;
        this._router = _router;
        this.AccountsService = AccountsService;
        this.emailRegex = /@/;
        this.primarycontact = [];
        this.router = this._router;
        this.submitted = false;
        this.primaryForm = fb.group({
            'ssoFname': ['', forms_1.Validators.required],
            'ssoLname': ['', forms_1.Validators.required],
            'ssoTel': ['', forms_1.Validators.required],
            'ssoCell': ['', forms_1.Validators.required],
            'ssoEmail': ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(this.emailRegex)
                ])]
        });
    }
    FormPrimaryComponent.prototype.ngOnInit = function () {
        // if (localStorage.getItem('currentUser')) {
        //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //     const currentUserToken = currentUser.token;
        //
        //     this.CurrentUserService.getCurrentUser(currentUserToken)
        //         .subscribe(res => {
        //             this.currentUser.push(res);
        //             this.currentId = this.currentUser[0]._id;
        //         })
        //
        // }
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            this.AccountsService.getAccounts(this.CurrentId)
                .subscribe(function (res) {
                _this.primarycontact.push(res);
            });
        }
    };
    FormPrimaryComponent.prototype.submitForm = function (value) {
        console.log(value);
        this.submitted = true;
        console.log(this.submitted);
    };
    FormPrimaryComponent.prototype.goBack = function () {
        this.location.back();
    };
    FormPrimaryComponent.prototype.isSignup = function () {
        return this.router.url == 'main/address/address-primary';
    };
    return FormPrimaryComponent;
}());
__decorate([
    core_1.Input('currentId'),
    __metadata("design:type", String)
], FormPrimaryComponent.prototype, "CurrentId", void 0);
FormPrimaryComponent = __decorate([
    core_1.Component({
        selector: 'form-primary',
        templateUrl: 'app/form-primary/form-primary.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        common_1.Location,
        router_1.Router,
        accounts_service_1.accountService])
], FormPrimaryComponent);
exports.FormPrimaryComponent = FormPrimaryComponent;
//# sourceMappingURL=form-primary.component.js.map