import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserProfileService {
    private apiUrl = 'http://jsonplaceholder.typicode.com/users';

    constructor(public http: Http) {}

    getUserProfiles() {
        return this.http
        .get(this.apiUrl)
        .map((response: Response) => response.json());
        }

}
