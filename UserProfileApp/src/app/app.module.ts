import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';


import {
    Route,
    RouterModule,
    PreloadAllModules
} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { UserProfileComponent } from './user-profile-component/user-profile.component';
import { UserProfileService } from './user-application-services/user-dashboard-service';
import { UserPostsComponent } from './user-posts-component/user-posts.component';
import { UserPostsService } from './user-application-services/user-posts-service';

@NgModule({
    declarations: [
        AppComponent,
        UserProfileComponent,
        UserPostsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    providers: [UserProfileService, UserPostsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
