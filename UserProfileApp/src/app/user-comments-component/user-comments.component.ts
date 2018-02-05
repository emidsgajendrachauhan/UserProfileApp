import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'comments',
    templateUrl: './user-comments.component.html',
    styleUrls: ['./user-comments.component.css']
})

export class UserCommentsComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}
