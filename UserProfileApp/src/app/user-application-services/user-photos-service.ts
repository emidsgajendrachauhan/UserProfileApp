import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserPhotosService {
    private apiUrlForPost = 'https://jsonplaceholder.typicode.com/photos';

    constructor(public http: Http) { }

    /* Service: Get user photos by album id */
    getUserPhotosByAlbumId(albumId: number) {
        return this.http
            .get(`${this.apiUrlForPost}/?albumId=${albumId}`)
            .map((response: Response) => response.json());
    }

}
