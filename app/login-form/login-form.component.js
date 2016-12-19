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
var LoginFormComponent = (function () {
    function LoginFormComponent(fb) {
        this.submitted = false;
        this.loginForm = fb.group({
            'sgEmail': [null, forms_1.Validators.required],
            'sgPassword': [null, forms_1.Validators.required]
        });
    }
    LoginFormComponent.prototype.submitForm = function (value) {
        console.log(value);
        this.submitted = true;
        console.log(this.submitted);
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        templateUrl: 'app/login-form/login-form.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], LoginFormComponent);
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map