"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require("./login/login.component");
var login_form_component_1 = require("./login-form/login-form.component");
var forgotpassword_component_1 = require("./forgotpassword/forgotpassword.component");
var signup_component_1 = require("./signup/signup.component");
var signup_form_one_component_1 = require("./signup-form-one/signup-form-one.component");
var signup_form_two_component_1 = require("./signup-form-two/signup-form-two.component");
var signup_success_component_1 = require("./signup-success/signup-success.component");
var resetpassword_component_1 = require("./resetpassword/resetpassword.component");
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
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map