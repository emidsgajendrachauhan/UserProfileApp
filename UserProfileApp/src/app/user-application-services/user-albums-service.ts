import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserAlbumsService {
    private apiUrlForPost = 'https://jsonplaceholder.typicode.com/albums';

    constructor(public http: Http) { }

    getUserAlbumsByUserId(userId: number) {
        return this.http
            .get(`${this.apiUrlForPost}/?userId=${userId}`)
            .map((response: Response) => response.json());
    }

}
