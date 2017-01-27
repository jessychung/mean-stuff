import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class vectorleapService {

    constructor(private http: Http) {
        console.log('getting the users...');
    }

    // get vectorleap instances
    getInstances(token) {
        return this.http.get('/api/vectorleap/' + token)
            .map(res => res.json());
    }

    getOneInstance(id) {
        return this.http.get('/api/vectorleap/get/' + id)
            .map(res => res.json());
    }

    createInstance(newUser) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/vectorleap', JSON.stringify(newUser), {headers: headers} )
            .map(res => res.json());

    }

    deleteInstance(id) {
        return this.http.delete('/api/vectorleap/' + id)
            .map(res => res.json());
    }

    updateInstance(updatedUser) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/vectorleap/'+updatedUser._id, JSON.stringify(updatedUser), {headers: headers} )
            .map(res => res.json());
    }

}