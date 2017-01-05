import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class testService {

    constructor(private http: Http) { }

    // get data
    getAll() {
        return this.http.get('')
            .map(res => res.json());
    }
}