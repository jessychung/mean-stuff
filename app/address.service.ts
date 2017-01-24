import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import {authService} from "./auth.service";

@Injectable()
export class addressService {

    constructor(
        private http: Http,
        private AuthService: authService) {
    }

    getAddress(token) {

        if (localStorage.getItem('currentUser')) {

            let headers = new Headers({ 'Authorization': 'Bearer ' + token });
            let options = new RequestOptions({ headers: headers });

            return this.http.get('/api/address/' + token, options)
                .map(res => res.json());
        }
    }

    updateAddress(updatedAddress) {
        if (localStorage.getItem('currentUser')) {

            let headers = new Headers({ 'Authorization': 'Bearer ' + this.AuthService.token });
            let options = new RequestOptions({ headers: headers });

            headers.append('Content-Type', 'application/json');

            return this.http.put('/api/address/'+updatedAddress.accountId, JSON.stringify(updatedAddress), options)
                .map(res => res.json());

        }
    }
}