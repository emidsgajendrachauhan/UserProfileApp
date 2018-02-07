import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Posts } from '../models/posts';

@Injectable()
export class UserPostsService {
    private apiUrlForPost = 'https://jsonplaceholder.typicode.com/posts';
    private apiUrlForComments = 'https://jsonplaceholder.typicode.com/comments';

    constructor(public http: Http) { }

    /* Service: Get user post by user id */
    getUserPostsByUserId(id: number) {
        return this.http
            .get(`${this.apiUrlForPost}/?userId=${id}`)
            .map((response: Response) => response.json());
    }

    /* Service: Get user comments by post id */
    getUserCommentsByPostId(commentId: number) {
        return this.http
            .get(`${this.apiUrlForComments}/?postId=${commentId}`)
            .map((response: Response) => response.json());
    }

    /* Service: Add new post for specific user */
    addNewPostForUser(postUserId: number, postTitle: string, postBody: string) {
        return this.http
            .post(`${this.apiUrlForPost}`, { userId: postUserId, title: postTitle, body: postBody })
            .map((response: Response) => response.json());
    }

}
