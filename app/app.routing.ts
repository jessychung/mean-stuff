import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {ForgotpasswordComponent} from "./forgotpassword/forgotpassword.component";
import {SignupComponent} from "./signup/signup.component";
import {SignupFormOneComponent} from "./signup-form-one/signup-form-one.component";
import {SignupFormTwoComponent} from "./signup-form-two/signup-form-two.component";
import {SignupSuccessComponent} from "./signup-success/signup-success.component";
import {ResetpasswordComponent} from "./resetpassword/resetpassword.component";
import {MainComponent} from "./main/main.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {SupportTicketsComponent} from "./support-tickets/support-tickets.component";
import {InvoicesComponent} from "./invoices/invoices.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InvoicesAllComponent} from "./invoices-all/invoices-all.component";
import {InvoicesThismonthComponent} from "./invoices-thismonth/invoices-thismonth.component";
import {AddressComponent} from "./address/address.component";
import {InvoicesSingleComponent} from "./invoices-single/invoices-single.component";
import {SupportTicketsAllComponent} from "./support-tickets-all/support-tickets-all.component";
import {SupportTicketsSingleComponent} from "./support-tickets-single/support-tickets-single.component";
import {SupportTicketsPriorityComponent} from "./support-tickets-priority/support-tickets-priority.component";
import {ManageUsersAllComponent} from "./manage-users-all/manage-users-all.component";
import {AddressCompanyComponent} from "./address-company/address-company.component";
import {AddressPrimaryComponent} from "./address-primary/address-primary.component";
import {ManageUsersSingleComponent} from "./manage-users-single/manage-users-single.component";
import {ManageUsersDisplayComponent} from "./manage-users-display/manage-users-display.component";
import {ManageUsersEditComponent} from "./manage-users-edit/manage-users-edit.component";
import {InvoicesCustomComponent} from "./invoices-custom/invoices-custom.component";
import {VectorleapComponent} from "./vectorleap/vectorleap.component";
import {authGuard} from "./route.guard";
import {ProjectsComponent} from "./projects/projects.component";
import {ProjectsAllComponent} from "./projects-all/projects-all.component";
import {ProjectsClientsComponent} from "./projects-clients/projects-clients.component";
import {ProjectsClientsAddeditComponent} from "./projects-clients-addedit/projects-clients-addedit.component";
import {ProjectsSingleComponent} from "./projects-single/projects-single.component";
import {ProjectsTaskComponent} from "./projects-task/projects-task.component";
import {VectorleapAllComponent} from "./vectorleap-all/vectorleap-all.component";
import {VectorleapManageComponent} from "./vectorleap-manage/vectorleap-manage.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login/login-form',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        children: [
            {
                path: 'login-form',
                component: LoginFormComponent
            },
            {
                path: 'forgotpassword',
                component: ForgotpasswordComponent
            },
            {
                path: 'resetpassword',
                component: ResetpasswordComponent
            }
        ]
    },
    {
        path: 'signup',
        component: SignupComponent,
        children: [
            {
                path: 'signup-form-one',
                component: SignupFormOneComponent
            },
            {
                path: 'signup-form-two',
                component: SignupFormTwoComponent
            },
            {
                path: 'signup-success',
                component: SignupSuccessComponent
            }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'main',
        component: MainComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'manage-users',
                component: ManageUsersComponent,
                children: [
                    {
                        path: 'manage-users-all',
                        component: ManageUsersAllComponent
                    }
                ]
            },
            {
                path: 'support-tickets',
                component: SupportTicketsComponent,
                children: [
                    {
                        path: 'support-tickets-all',
                        component: SupportTicketsAllComponent
                    },
                    {
                        path: 'support-tickets-priority',
                        component: SupportTicketsPriorityComponent
                    }
                ]
            },
            {
                path: 'invoices',
                component: InvoicesComponent,
                children: [
                    {
                        path: 'invoices-all',
                        component: InvoicesAllComponent
                    },
                    {
                        path: 'invoices-thismonth',
                        component: InvoicesThismonthComponent
                    },
                    {
                        path: 'invoices-custom',
                        component: InvoicesCustomComponent
                    }
                ]
            },
            {
                path: 'projects',
                component: ProjectsComponent,
                children: [
                    {
                        path: 'projects-all',
                        component: ProjectsAllComponent
                    },
                    {
                        path: 'projects-clients',
                        component: ProjectsClientsComponent
                    },
                    {
                        path: 'projects-clients-edit/:id',
                        component: ProjectsClientsAddeditComponent
                    },
                    {
                        path: 'projects-clients-add',
                        component: ProjectsClientsAddeditComponent
                    }
                ]
            },
            {
                path: 'address',
                component: AddressComponent,
                children: [
                    {
                        path: 'address-company',
                        component: AddressCompanyComponent
                    },
                    {
                        path: 'address-primary',
                        component: AddressPrimaryComponent
                    }
                ]
            },
            {
                path: 'invoices-single',
                component: InvoicesSingleComponent
            },
            {
                path: 'support-tickets-single',
                component: SupportTicketsSingleComponent
            },
            {
                path: 'manage-users-single',
                component: ManageUsersSingleComponent,
                children: [
                    {
                        path: 'view-user',
                        component: ManageUsersDisplayComponent
                    },
                    {
                        path: 'edit-user',
                        component: ManageUsersEditComponent
                    }
                ]
            },
            {
                path: 'projects-single/:id',
                component: ProjectsSingleComponent
            },
            {
                path: 'projects-task',
                component: ProjectsTaskComponent
            },
            {
                path: 'vectorleap',
                component: VectorleapComponent,
                children: [
                    {
                        path: 'vectorleap-all',
                        component: VectorleapAllComponent
                    }
                ]
            },
            {
                path: 'vectorleap-manage/:id',
                component: VectorleapManageComponent
            }
        ]
    }
    // { path: '**', redirectTo: '/login/login-form' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);