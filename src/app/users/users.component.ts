import { Component, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/takeWhile';

import { Communication } from './../data-services/communication.service';
import { User } from './../entities/user';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})

export class UsersComponent implements OnDestroy {
  public user: User;
  public numberOfFollowersUser: number = 10;
  public listOfUsersWithHighestDistances: Array<User>;
  public loadingList: boolean;

  private _followersOfUser: Array<User>;
  private alive: boolean = true;

  set followersOfUser(followersOfUser: Array<User>) {
    this._followersOfUser = followersOfUser;
    if (this.user.location) {
      this.getLocationOfFollowers();
    } else {
      this.loadingList = false;
    }
  }
  get followersOfUser(): Array<User> {
    return this._followersOfUser;
  }

  constructor(
    private communication: Communication
  ) { }

  ngOnDestroy(): void {
    this.alive = false;
  }

  getLocationOfFollowers(): void {
    if (this._followersOfUser.length > 0) {
      this.communication.userDataService.getFollowersWithDistance(this._followersOfUser, this.user.location)
        .takeWhile(() => this.alive)
        .subscribe(data => {
          this.getUsersWithTheHighestDistances(data);
        });
    } else {
      this.loadingList = false;
    }
  }

  getUsersWithTheHighestDistances(followers: Array<User>): any {
    this.listOfUsersWithHighestDistances = followers.sort((user1, user2) =>
      Number(user2.distanceToFollowingUser) - Number(user1.distanceToFollowingUser)
    ).slice(0, this.numberOfFollowersUser);
    this.loadingList = false;
  }
}
