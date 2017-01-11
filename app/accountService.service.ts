import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class accountService {

    constructor(private http: Http) {
        console.log('account api works');
    }

    getAllAccounts() {
        return this.http.get('/api/accounts')
            .map(res => res.json());
    }

    getAccount(email) {
        return this.http.get('/api/accounts/' + email)
            .map(res => res.json());
    }

}