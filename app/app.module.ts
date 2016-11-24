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
        ResetpasswordComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
