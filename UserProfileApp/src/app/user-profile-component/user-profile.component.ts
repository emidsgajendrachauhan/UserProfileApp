import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { User } from '../models/user';
import { UserProfileService } from '../user-application-services/user-dashboard-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  users: User[] = [];

  constructor(private service: UserProfileService) { }

  ngOnInit() {
      this.service.getUserProfiles().subscribe(
          (users) => {
              this.users = users;
          });
  }
}
