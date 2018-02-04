import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { User } from './user';
import { Address } from './address';

@Component({
  selector: 'user',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  // title = 'User profile component';
  users: User[] = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: { street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874' },
    phone: '0987654321',
    website: 'hildegard.org',
    company: { name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets' }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: { street: 'Victor Plains', suite: 'Suite 879', city: 'Wisokyburgh', zipcode: '90566-7771' },
    phone: '1234567890',
    website: 'anastasia.net',
    company: { name: 'Deckow-Crist', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets' }
  }];

  constructor() { }

  ngOnInit() {

  }
}
