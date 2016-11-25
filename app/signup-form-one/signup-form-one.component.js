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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var country_1 = require('../list/country');
var SignupFormOneComponent = (function () {
    function SignupFormOneComponent(fb) {
        this.submitted = false;
        this.countrylist = new country_1.CountryList();
        this.signupForm = fb.group({
            'ssoCname': ['', forms_1.Validators.required],
            'ssoCstreet1': ['', forms_1.Validators.required],
            'ssoCstreet2': [''],
            'ssoCcity': ['', forms_1.Validators.required],
            'ssoCprovince': ['', forms_1.Validators.required],
            'ssoCcountry': ['', forms_1.Validators.required],
            'ssoCpostal': ['', forms_1.Validators.required],
            'ssoCtel': ['', forms_1.Validators.required]
        });
    }
    SignupFormOneComponent.prototype.submitForm = function (value) {
        console.log(value);
        this.submitted = true;
        console.log(this.submitted);
    };
    SignupFormOneComponent = __decorate([
        core_1.Component({
            selector: 'signup-form',
            templateUrl: 'app/signup-form-one/signup-form-one.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], SignupFormOneComponent);
    return SignupFormOneComponent;
}());
exports.SignupFormOneComponent = SignupFormOneComponent;
//# sourceMappingURL=signup-form-one.component.js.map