import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { User } from './models/user';

@Injectable()
export class UserProfileService {
    private apiUrl = 'http://jsonplaceholder.typicode.com/users';
    private users: User[] = [];

    constructor(public http: Http) {}

    getUserProfiles() {
        return this.http
        .get(this.apiUrl)
        .map((response: Response) => response.json());
        }

}
