import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class testService {

    constructor(private http: Http) {
        console.log('getting the users...');
    }

    // get data
    getUsers() {
        return this.http.get('/api/tasks')
            .map(res => res.json());
    }

    createUser(newUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(newUser), {headers: headers} )
            .map(res => res.json());

    }

}