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
var SignupFormTwoComponent = (function () {
    function SignupFormTwoComponent(fb, location) {
        this.location = location;
        this.emailRegex = /@/;
        this.submitted = false;
        this.signupForm2 = fb.group({
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
    SignupFormTwoComponent.prototype.submitForm = function (value) {
        console.log(value);
        this.submitted = true;
        console.log(this.submitted);
    };
    SignupFormTwoComponent.prototype.goBack = function () {
        this.location.back();
    };
    return SignupFormTwoComponent;
}());
SignupFormTwoComponent = __decorate([
    core_1.Component({
        selector: 'signup-form-two',
        templateUrl: 'app/signup-form-two/signup-form-two.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, common_1.Location])
], SignupFormTwoComponent);
exports.SignupFormTwoComponent = SignupFormTwoComponent;
//# sourceMappingURL=signup-form-two.component.js.map