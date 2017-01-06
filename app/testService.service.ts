import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class testService {

    constructor(private http: Http) {
        console.log('getting the users...');
    }

    // get data
    getUsers() {
        return this.http.get('http://localhost:3000/api/tasks')
            .map(res => res.json());
    }

}