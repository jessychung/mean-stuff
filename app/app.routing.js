"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var login_form_component_1 = require("./login-form/login-form.component");
var forgotpassword_component_1 = require("./forgotpassword/forgotpassword.component");
var signup_component_1 = require("./signup/signup.component");
var signup_form_one_component_1 = require("./signup-form-one/signup-form-one.component");
var signup_form_two_component_1 = require("./signup-form-two/signup-form-two.component");
var signup_success_component_1 = require("./signup-success/signup-success.component");
var resetpassword_component_1 = require("./resetpassword/resetpassword.component");
var main_component_1 = require("./main/main.component");
var manage_users_component_1 = require("./manage-users/manage-users.component");
var support_tickets_component_1 = require("./support-tickets/support-tickets.component");
var invoices_component_1 = require("./invoices/invoices.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var invoices_all_component_1 = require("./invoices-all/invoices-all.component");
var invoices_thismonth_component_1 = require("./invoices-thismonth/invoices-thismonth.component");
var timesheets_component_1 = require("./timesheets/timesheets.component");
var address_component_1 = require("./address/address.component");
var invoices_single_component_1 = require("./invoices-single/invoices-single.component");
var support_tickets_all_component_1 = require("./support-tickets-all/support-tickets-all.component");
var support_tickets_single_component_1 = require("./support-tickets-single/support-tickets-single.component");
var support_tickets_priority_component_1 = require("./support-tickets-priority/support-tickets-priority.component");
var manage_users_all_component_1 = require("./manage-users-all/manage-users-all.component");
var timesheets_all_component_1 = require("./timesheets-all/timesheets-all.component");
var address_company_component_1 = require("./address-company/address-company.component");
var address_primary_component_1 = require("./address-primary/address-primary.component");
var manage_users_single_component_1 = require("./manage-users-single/manage-users-single.component");
var manage_users_display_component_1 = require("./manage-users-display/manage-users-display.component");
var manage_users_edit_component_1 = require("./manage-users-edit/manage-users-edit.component");
var timesheets_single_component_1 = require("./timesheets-single/timesheets-single.component");
var timesheets_task_component_1 = require("./timesheets-task/timesheets-task.component");
var timesheets_clients_component_1 = require("./timesheets-clients/timesheets-clients.component");
var invoices_custom_component_1 = require("./invoices-custom/invoices-custom.component");
var vectorleap_component_1 = require("./vectorleap/vectorleap.component");
var timesheets_clients_addedit_component_1 = require("./timesheets-clients-addedit/timesheets-clients-addedit.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/login/login-form',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        children: [
            {
                path: 'login-form',
                component: login_form_component_1.LoginFormComponent
            },
            {
                path: 'forgotpassword',
                component: forgotpassword_component_1.ForgotpasswordComponent
            },
            {
                path: 'resetpassword',
                component: resetpassword_component_1.ResetpasswordComponent
            }
        ]
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent,
        children: [
            {
                path: 'signup-form-one',
                component: signup_form_one_component_1.SignupFormOneComponent
            },
            {
                path: 'signup-form-two',
                component: signup_form_two_component_1.SignupFormTwoComponent
            },
            {
                path: 'signup-success',
                component: signup_success_component_1.SignupSuccessComponent
            }
        ]
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'main',
        component: main_component_1.MainComponent,
        children: [
            {
                path: 'manage-users',
                component: manage_users_component_1.ManageUsersComponent,
                children: [
                    {
                        path: 'manage-users-all',
                        component: manage_users_all_component_1.ManageUsersAllComponent
                    }
                ]
            },
            {
                path: 'support-tickets',
                component: support_tickets_component_1.SupportTicketsComponent,
                children: [
                    {
                        path: 'support-tickets-all',
                        component: support_tickets_all_component_1.SupportTicketsAllComponent
                    },
                    {
                        path: 'support-tickets-priority',
                        component: support_tickets_priority_component_1.SupportTicketsPriorityComponent
                    }
                ]
            },
            {
                path: 'invoices',
                component: invoices_component_1.InvoicesComponent,
                children: [
                    {
                        path: 'invoices-all',
                        component: invoices_all_component_1.InvoicesAllComponent
                    },
                    {
                        path: 'invoices-thismonth',
                        component: invoices_thismonth_component_1.InvoicesThismonthComponent
                    },
                    {
                        path: 'invoices-custom',
                        component: invoices_custom_component_1.InvoicesCustomComponent
                    }
                ]
            },
            {
                path: 'timesheets',
                component: timesheets_component_1.TimesheetsComponent,
                children: [
                    {
                        path: 'timesheets-all',
                        component: timesheets_all_component_1.TimesheetsAllComponent
                    },
                    {
                        path: 'timesheets-clients',
                        component: timesheets_clients_component_1.TimesheetsClientsComponent
                    },
                    {
                        path: 'timesheets-clients-edit/:id',
                        component: timesheets_clients_addedit_component_1.TimesheetsClientsAddeditComponent
                    },
                    {
                        path: 'timesheets-clients-add',
                        component: timesheets_clients_addedit_component_1.TimesheetsClientsAddeditComponent
                    }
                ]
            },
            {
                path: 'address',
                component: address_component_1.AddressComponent,
                children: [
                    {
                        path: 'address-company',
                        component: address_company_component_1.AddressCompanyComponent
                    },
                    {
                        path: 'address-primary',
                        component: address_primary_component_1.AddressPrimaryComponent
                    }
                ]
            },
            {
                path: 'invoices-single',
                component: invoices_single_component_1.InvoicesSingleComponent
            },
            {
                path: 'support-tickets-single',
                component: support_tickets_single_component_1.SupportTicketsSingleComponent
            },
            {
                path: 'manage-users-single',
                component: manage_users_single_component_1.ManageUsersSingleComponent,
                children: [
                    {
                        path: 'view-user',
                        component: manage_users_display_component_1.ManageUsersDisplayComponent
                    },
                    {
                        path: 'edit-user',
                        component: manage_users_edit_component_1.ManageUsersEditComponent
                    }
                ]
            },
            {
                path: 'timesheets-single',
                component: timesheets_single_component_1.TimesheetsSingleComponent
            },
            {
                path: 'timesheets-task',
                component: timesheets_task_component_1.TimesheetsTaskComponent
            },
            {
                path: 'vectorleap',
                component: vectorleap_component_1.VectorleapComponent
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map