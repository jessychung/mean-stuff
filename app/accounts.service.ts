import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {authService} from "./auth.service";

@Injectable()
export class accountService {

    public token: string;

    constructor(private http: Http,
                private AuthService: authService) {

    }

    getAccounts(id) {

        if (localStorage.getItem('currentUser')) {

            let headers = new Headers({ 'Authorization': 'Bearer ' + this.AuthService.token });
            let options = new RequestOptions({ headers: headers });

            return this.http.get('/api/accounts/' + id, options)
                .map(res => res.json());
        }
    }


}