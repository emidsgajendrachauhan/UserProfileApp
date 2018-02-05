import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';
import { UserProfileComponent } from './user-profile-component/user-profile.component';
import { UserPostsComponent } from './user-posts-component/user-posts.component';

export const ROUTES: Routes = [
  { path: '',      component: UserProfileComponent },
  { path: 'user',  component: UserProfileComponent },
  { path: 'posts/:id',  component: UserPostsComponent },
];
