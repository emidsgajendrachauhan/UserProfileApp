import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute } from '@angular/router';
import { Photo } from '../models/photos';
import { UserPhotosService } from '../user-application-services/user-photos-service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'photos',
    templateUrl: './user-photos.component.html',
    styleUrls: ['./user-photos.component.css']
})

export class UserPhotoComponent implements OnInit {
    photos: Photo[] = [];
    albumId: number;

    constructor(
        private service: UserPhotosService,
        private getRouter: Router,
        private getRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getRoute.paramMap.subscribe(params => {
            const getId = params.get('id');
            if (getId) {
                // tslint:disable-next-line:radix
                this.albumId = parseInt(getId);
                this.service.getUserPhotosByAlbumId(this.albumId).subscribe(
                    (photos: Photo[]) => {
                        this.photos = photos;
                    });
            }
        });
    }

    showFullPhoto(event, photoUrl: string) {
        console.log(event);
        (<HTMLImageElement>document.querySelector('.img-size-full')).src = photoUrl;
    }

}
