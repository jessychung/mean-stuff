import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class authService {

    public token: string;

    constructor(private http: Http) {
        console.log('account api works');
    }

    login(email, password) {
        return this.http.get('/api/accounts/' + email + '/' + password)
            .map(res => {
                let token = res.json().token;

                if(token) {
                    localStorage.setItem('currentUser', JSON.stringify({ accountEmail: email, token: token }));
                    return true;
                } else  {
                    return false;
                }

            });
    }



}