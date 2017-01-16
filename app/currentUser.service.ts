import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import {authService} from "./auth.service";

@Injectable()
export class currentUserService {

    constructor(
        private http: Http,
        private AuthService: authService) {
    }

    getCurrentUser(email) {

        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.AuthService.token });
            let options = new RequestOptions({ headers: headers });
            console.log(this.AuthService.token);
            // get users from api
            return this.http.get('/api/currentuser/' + email, options)
                .map(res => res.json());
        }
    }
}