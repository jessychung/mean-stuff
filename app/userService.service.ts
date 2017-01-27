import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class userService {

    constructor(private http: Http) {
        console.log('getting the users...');
    }

    // get data
    getUsers(id) {
        return this.http.get('/api/users/' + id)
            .map(res => res.json());
    }

    createUser(newUser) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users', JSON.stringify(newUser), {headers: headers} )
            .map(res => res.json());

    }

    deleteUser(id) {
        return this.http.delete('/api/users/' + id)
            .map(res => res.json());
    }

    updateUser(updatedUser) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/users/'+updatedUser._id, JSON.stringify(updatedUser), {headers: headers} )
            .map(res => res.json());
    }

}