import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const ROUTES: Routes = [
  { path: '',      component: UserProfileComponent },
  { path: 'user',  component: UserProfileComponent },
];
