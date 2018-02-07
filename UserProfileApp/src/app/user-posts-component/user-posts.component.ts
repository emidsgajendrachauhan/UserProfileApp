import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Posts } from '../models/posts';
import { UserPostsService } from '../user-application-services/user-posts-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Comments } from '../models/comments';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'posts',
    templateUrl: './user-posts.component.html',
    styleUrls: ['./user-posts.component.css']
})

export class UserPostsComponent implements OnInit {
    posts: Posts[] = [];
    comments: Comments[] = [];
    userId: number;
    userName: string;

    constructor(
        private service: UserPostsService,
        private getRouter: Router,
        private getRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getRoute.paramMap.subscribe(params => {
            const getId = params.get('id');
            const getUserName = params.get('name');
            if (getId) {
                // tslint:disable-next-line:radix
                this.userId = parseInt(getId);
                this.userName = getUserName;
                this.service.getUserPostsByUserId(this.userId).subscribe(
                    (posts: Posts[]) => {
                        this.posts = posts;
                    });
            }
        });
    }

    /* Method: Get user comments by post id */
    getUserCommentsByPostId(postId: number) {
        this.getRoute.paramMap.subscribe(params => {
            if (postId) {
                this.service.getUserCommentsByPostId(postId).subscribe(
                    (comments: Comments[]) => {
                        this.comments = comments;
                    });
            }
        });
    }

    /* Method: Save new post of user */
    saveUserNewPost() {
        this.getRoute.paramMap.subscribe(params => {
            const getPostId = params.get('id');
            const postTitle = (<HTMLInputElement>document.querySelector('#inputTitle')).value;
            const postBody = (<HTMLInputElement>document.querySelector('#inputMessage')).value;
            const hangoutButton = document.getElementById('cancel-Post-btn');
            if (getPostId && postTitle && postBody) {
                // tslint:disable-next-line:radix
                this.userId = parseInt(getPostId);
                this.service.addNewPostForUser(this.userId, postTitle, postBody).subscribe(
                    (posts: Posts) => {
                        this.posts.push(posts);
                        // Cleaning HTML and closing popup
                        (<HTMLInputElement>document.querySelector('#inputTitle')).value = '';
                        (<HTMLInputElement>document.querySelector('#inputMessage')).value = '';
                        hangoutButton.click();
                    });
            } else {
                alert('Title or Message body can not be empty...');
            }
        });
    }

}
