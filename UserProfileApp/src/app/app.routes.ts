import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';
import { UserProfileComponent } from './user-profile-component/user-profile.component';
import { UserPostsComponent } from './user-posts-component/user-posts.component';
import { UserAlbumsComponent } from './user-albums-component/user-albums.component';
import { UserPhotoComponent } from './user-photos-component/user-photos.component';

export const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'posts/:id', component: UserPostsComponent },
  { path: 'albums/:id', component: UserAlbumsComponent },
  { path: 'photos/:id', component: UserPhotoComponent },
];
