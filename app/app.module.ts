import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { routing } from './app.routing';

import { AppComponent }   from './app.component';
import {LoginComponent} from "./login/login.component";
import {ForgotpasswordComponent} from "./forgotpassword/forgotpassword.component";
import {AlertComponent} from "./alerts/alert.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {SignupFormOneComponent} from "./signup-form-one/signup-form-one.component";
import {SignupFormTwoComponent} from "./signup-form-two/signup-form-two.component";
import {SignupSuccessComponent} from "./signup-success/signup-success.component";
import {ResetpasswordComponent} from "./resetpassword/resetpassword.component";
import {MainComponent} from "./main/main.component";
import {SupportTicketsComponent} from "./support-tickets/support-tickets.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {InvoicesComponent} from "./invoices/invoices.component";
import {TopbarComponent} from "./top-bar/top-bar.component";
import {PageControlsComponent} from "./page-controls/page-controls.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InvoicesAllComponent} from "./invoices-all/invoices-all.component";
import {InvoicesThismonthComponent} from "./invoices-thismonth/invoices-thismonth.component";
import {TimesheetsComponent} from "./timesheets/timesheets.component";
import {AddressComponent} from "./address/address.component";
import {InvoicesSingleComponent} from "./invoices-single/invoices-single.component";
import {SupportTicketsAllComponent} from "./support-tickets-all/support-tickets-all.component";
import {SupportTicketsPriorityComponent} from "./support-tickets-priority/support-tickets-priority.component";
import {SupportTicketsSingleComponent} from "./support-tickets-single/support-tickets-single.component";
import {ManageUsersAllComponent} from "./manage-users-all/manage-users-all.component";
import {TimesheetsAllComponent} from "./timesheets-all/timesheets-all.component";
import {AddressCompanyComponent} from "./address-company/address-company.component";
import {AddressPrimaryComponent} from "./address-primary/address-primary.component";
import {FormCompanyComponent} from "./form-company/form-company.component";
import {FormPrimaryComponent} from "./form-primary/form-primary.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        DropDownsModule,
        ButtonsModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        LoginFormComponent,
        ForgotpasswordComponent,
        AlertComponent,
        SignupComponent,
        SignupFormOneComponent,
        SignupFormTwoComponent,
        SignupSuccessComponent,
        ResetpasswordComponent,
        DashboardComponent,
        MainComponent,
        SupportTicketsComponent,
        SupportTicketsAllComponent,
        SupportTicketsPriorityComponent,
        SupportTicketsSingleComponent,
        ManageUsersComponent,
        ManageUsersAllComponent,
        TimesheetsComponent,
        TimesheetsAllComponent,
        AddressComponent,
        AddressCompanyComponent,
        AddressPrimaryComponent,
        InvoicesComponent,
        InvoicesAllComponent,
        InvoicesThismonthComponent,
        InvoicesSingleComponent,
        TopbarComponent,
        PageControlsComponent,
        FormCompanyComponent,
        FormPrimaryComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
