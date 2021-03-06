"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var kendo_angular_dialog_1 = require("@progress/kendo-angular-dialog");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
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
var address_component_1 = require("./address/address.component");
var invoices_single_component_1 = require("./invoices-single/invoices-single.component");
var support_tickets_all_component_1 = require("./support-tickets-all/support-tickets-all.component");
var support_tickets_priority_component_1 = require("./support-tickets-priority/support-tickets-priority.component");
var support_tickets_single_component_1 = require("./support-tickets-single/support-tickets-single.component");
var manage_users_all_component_1 = require("./manage-users-all/manage-users-all.component");
var address_company_component_1 = require("./address-company/address-company.component");
var address_primary_component_1 = require("./address-primary/address-primary.component");
var form_company_component_1 = require("./form-company/form-company.component");
var form_primary_component_1 = require("./form-primary/form-primary.component");
var manage_users_single_component_1 = require("./manage-users-single/manage-users-single.component");
var form_user_component_1 = require("./form-user/form-user.component");
var manage_users_display_component_1 = require("./manage-users-display/manage-users-display.component");
var manage_users_edit_component_1 = require("./manage-users-edit/manage-users-edit.component");
var invoices_custom_component_1 = require("./invoices-custom/invoices-custom.component");
var vectorleap_component_1 = require("./vectorleap/vectorleap.component");
var form_client_component_1 = require("./form-client/form-client.component");
var userService_service_1 = require("./userService.service");
var auth_service_1 = require("./auth.service");
var currentUser_service_1 = require("./currentUser.service");
var route_guard_1 = require("./route.guard");
var accounts_service_1 = require("./accounts.service");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var projects_all_component_1 = require("./projects-all/projects-all.component");
var projects_clients_component_1 = require("./projects-clients/projects-clients.component");
var projects_clients_addedit_component_1 = require("./projects-clients-addedit/projects-clients-addedit.component");
var projects_component_1 = require("./projects/projects.component");
var projects_single_component_1 = require("./projects-single/projects-single.component");
var projects_task_component_1 = require("./projects-task/projects-task.component");
var projects_service_1 = require("./projects.service");
var ng2_auto_complete_1 = require("ng2-auto-complete");
var vectorleap_all_component_1 = require("./vectorleap-all/vectorleap-all.component");
var vectorleap_manage_component_1 = require("./vectorleap-manage/vectorleap-manage.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            kendo_angular_dropdowns_1.DropDownsModule,
            kendo_angular_buttons_1.ButtonsModule,
            ng2_bootstrap_1.TooltipModule,
            kendo_angular_grid_1.GridModule,
            kendo_angular_dialog_1.DialogModule,
            app_routing_1.routing,
            ng2_auto_complete_1.Ng2AutoCompleteModule,
            http_1.HttpModule
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
            support_tickets_all_component_1.SupportTicketsAllComponent,
            support_tickets_priority_component_1.SupportTicketsPriorityComponent,
            support_tickets_single_component_1.SupportTicketsSingleComponent,
            manage_users_component_1.ManageUsersComponent,
            manage_users_all_component_1.ManageUsersAllComponent,
            manage_users_single_component_1.ManageUsersSingleComponent,
            manage_users_display_component_1.ManageUsersDisplayComponent,
            manage_users_edit_component_1.ManageUsersEditComponent,
            projects_all_component_1.ProjectsAllComponent,
            projects_clients_component_1.ProjectsClientsComponent,
            projects_clients_addedit_component_1.ProjectsClientsAddeditComponent,
            projects_component_1.ProjectsComponent,
            projects_single_component_1.ProjectsSingleComponent,
            projects_task_component_1.ProjectsTaskComponent,
            address_component_1.AddressComponent,
            address_company_component_1.AddressCompanyComponent,
            address_primary_component_1.AddressPrimaryComponent,
            invoices_component_1.InvoicesComponent,
            invoices_all_component_1.InvoicesAllComponent,
            invoices_thismonth_component_1.InvoicesThismonthComponent,
            invoices_single_component_1.InvoicesSingleComponent,
            invoices_custom_component_1.InvoicesCustomComponent,
            top_bar_component_1.TopbarComponent,
            page_controls_component_1.PageControlsComponent,
            form_company_component_1.FormCompanyComponent,
            form_primary_component_1.FormPrimaryComponent,
            form_user_component_1.FormUserComponent,
            form_client_component_1.FormClientComponent,
            vectorleap_component_1.VectorleapComponent,
            vectorleap_all_component_1.VectorleapAllComponent,
            vectorleap_manage_component_1.VectorleapManageComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [userService_service_1.userService, auth_service_1.authService, accounts_service_1.accountService, currentUser_service_1.currentUserService, projects_service_1.projectsService, route_guard_1.authGuard]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map