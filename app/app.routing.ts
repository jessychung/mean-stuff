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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);