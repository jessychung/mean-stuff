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

    getCurrentUser(token) {

        if (localStorage.getItem('currentUser')) {

            let headers = new Headers({ 'Authorization': 'Bearer ' + token });
            let options = new RequestOptions({ headers: headers });

            return this.http.get('/api/currentuser/' + token, options)
                .map(res => res.json());
        }

    }
}