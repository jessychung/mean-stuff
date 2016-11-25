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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var kendo_angular_buttons_1 = require('@progress/kendo-angular-buttons');
var kendo_angular_dropdowns_1 = require('@progress/kendo-angular-dropdowns');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var login_component_1 = require("./login/login.component");
var forgotpassword_component_1 = require("./forgotpassword/forgotpassword.component");
var alert_component_1 = require("./alerts/alert.component");
var signup_component_1 = require("./signup/signup.component");
var login_form_component_1 = require("./login-form/login-form.component");
var signup_form_one_component_1 = require("./signup-form-one/signup-form-one.component");
var signup_form_two_component_1 = require("./signup-form-two/signup-form-two.component");
var signup_success_component_1 = require("./signup-success/signup-success.component");
var resetpassword_component_1 = require("./resetpassword/resetpassword.component");
var main_component_1 = require("./main/main.component");
var support_tickets_component_1 = require("./support-tickets/support-tickets.component");
var manage_users_component_1 = require("./manage-users/manage-users.component");
var invoices_component_1 = require("./invoices/invoices.component");
var top_bar_component_1 = require("./top-bar/top-bar.component");
var page_controls_component_1 = require("./page-controls/page-controls.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var invoices_all_component_1 = require("./invoices-all/invoices-all.component");
var invoices_thismonth_component_1 = require("./invoices-thismonth/invoices-thismonth.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                kendo_angular_buttons_1.ButtonsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                login_form_component_1.LoginFormComponent,
                forgotpassword_component_1.ForgotpasswordComponent,
                alert_component_1.AlertComponent,
                signup_component_1.SignupComponent,
                signup_form_one_component_1.SignupFormOneComponent,
                signup_form_two_component_1.SignupFormTwoComponent,
                signup_success_component_1.SignupSuccessComponent,
                resetpassword_component_1.ResetpasswordComponent,
                dashboard_component_1.DashboardComponent,
                main_component_1.MainComponent,
                support_tickets_component_1.SupportTicketsComponent,
                manage_users_component_1.ManageUsersComponent,
                invoices_component_1.InvoicesComponent,
                invoices_all_component_1.InvoicesAllComponent,
                invoices_thismonth_component_1.InvoicesThismonthComponent,
                top_bar_component_1.TopbarComponent,
                page_controls_component_1.PageControlsComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map