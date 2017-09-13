import { Component, Input } from '@angular/core';

import { User } from './../../entities/user';

@Component({
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html'
})

export class UsersListComponent {
  @Input() public loadingList: boolean;
  @Input() public listOfUsersWithHighestDistances: Array<User>;
}
