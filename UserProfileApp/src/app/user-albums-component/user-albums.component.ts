import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAlbumsService } from '../user-application-services/user-albums-service';
import { Album } from '../models/albums';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'albums',
    templateUrl: './user-albums.component.html',
    styleUrls: ['./user-albums.component.css']
})

export class UserAlbumsComponent implements OnInit {
    albums: Album[] = [];
    userId: number;

    constructor(
        private service: UserAlbumsService,
        private getRouter: Router,
        private getRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getRoute.paramMap.subscribe(params => {
            const getId = params.get('id');
            if (getId) {
                // tslint:disable-next-line:radix
                this.userId = parseInt(getId);
                this.service.getUserAlbumsByUserId(this.userId).subscribe(
                    (albums: Album[]) => {
                        this.albums = albums;
                    });
            }
        });
    }

}
