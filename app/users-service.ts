import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UserType } from './user';

@Injectable()
export class UserService {

    private catsUrl = 'app/cats';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

}