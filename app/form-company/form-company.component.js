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
var country_1 = require("../list/country");
var address_service_1 = require("../address.service");
var FormCompanyComponent = (function () {
    function FormCompanyComponent(fb, location, _router, AddressService) {
        this.location = location;
        this._router = _router;
        this.AddressService = AddressService;
        this.loaded = false;
        this.address = [];
        this.router = this._router;
        this.submitted = false;
        this.countrylist = new country_1.CountryList();
        this.companyForm = fb.group({
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
    FormCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var currentUserToken = currentUser.token;
            this.AddressService.getAddress(currentUserToken)
                .subscribe(function (res) {
                if (res) {
                    _this.loaded = true;
                    _this.address.push(res);
                }
            });
        }
    };
    FormCompanyComponent.prototype.submitForm = function (value) {
        var updatedAddress = {
            accountId: this.CurrentId,
            cName: this.companyForm.value.ssoCname,
            cStreet1: this.companyForm.value.ssoCstreet1,
            cStreet2: this.companyForm.value.ssoCstreet2,
            cCity: this.companyForm.value.ssoCcity,
            cProvince: this.companyForm.value.ssoCprovince,
            cCountry: this.companyForm.value.ssoCcountry,
            cPostal: this.companyForm.value.ssoCpostal,
            cTel: this.companyForm.value.ssoCtel
        };
        if (this.companyForm.valid) {
            this.AddressService.updateAddress(updatedAddress)
                .subscribe();
            this.submitted = true;
        }
        else {
            console.log("not valid");
        }
    };
    FormCompanyComponent.prototype.isSignup = function () {
        return this.router.url == 'main/address/address-company';
    };
    return FormCompanyComponent;
}());
__decorate([
    core_1.Input('currentId'),
    __metadata("design:type", String)
], FormCompanyComponent.prototype, "CurrentId", void 0);
FormCompanyComponent = __decorate([
    core_1.Component({
        selector: 'form-company',
        templateUrl: 'app/form-company/form-company.component.html',
        providers: [address_service_1.addressService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        common_1.Location,
        router_1.Router,
        address_service_1.addressService])
], FormCompanyComponent);
exports.FormCompanyComponent = FormCompanyComponent;
//# sourceMappingURL=form-company.component.js.map