import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class timesheetsService {

    constructor(private http: Http) {
        console.log('getting the timesheets...');
    }

    // get data
    getTimesheets(id) {
        return this.http.get('/api/timesheets/' + id)
            .map(res => res.json());
    }

    // getOneProject(id) {
    //     return this.http.get('/api/projects/view-project/' + id)
    //         .map(res => res.json());
    // }
    //
    // createProjects(newUser) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.post('/api/projects', JSON.stringify(newUser), {headers: headers} )
    //         .map(res => res.json());
    //
    // }
    //
    // deleteProjects(id) {
    //     return this.http.delete('/api/projects/' + id)
    //         .map(res => res.json());
    // }
    //
    // updateProjects(updatedUser) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.put('/api/projects/'+updatedUser._id, JSON.stringify(updatedUser), {headers: headers} )
    //         .map(res => res.json());
    // }

}