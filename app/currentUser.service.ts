import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import {AccountType} from "./account";
import {authService} from "./auth.service";

@Injectable()
export class currentUserService {
    constructor(
        private http: Http,
        private AuthService: authService) {
    }

    getCurrentUser() {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.AuthService.token });
        let options = new RequestOptions({ headers: headers });

        console.log("heelo" + this.AuthService.token);

        // get users from api
        return this.http.get('/api/accounts', options)
            .map(res => res.json());
    }
}