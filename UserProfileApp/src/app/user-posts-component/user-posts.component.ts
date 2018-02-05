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
    showComment: boolean = false;

    constructor(
        private service: UserPostsService,
        private getRouter: Router,
        private getRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getRoute.paramMap.subscribe(params => {
            const getId = params.get('id');
            if (getId) {
                // tslint:disable-next-line:radix
                this.userId = parseInt(getId);
                this.service.getUserPostsByUserId(this.userId).subscribe(
                    (posts: Posts[]) => {
                        this.posts = posts;
                    });
            }
        });
    }

    getUserCommentsByPostId(postId: number) {
        this.getRoute.paramMap.subscribe(params => {
            if (postId) {
                this.service.getUserCommentsByPostId(postId).subscribe(
                    (comments: Comments[]) => {
                        this.comments = comments;
                    });
                    this.showComment = true;
            }
        });
    }

}
