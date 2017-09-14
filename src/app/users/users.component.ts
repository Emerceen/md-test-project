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
  private usersIds: Array<number>;

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
    this.usersIds = [];
    const length = this._followersOfUser.length;
    if (this._followersOfUser.length > 0) {
      this._followersOfUser.map(
        (followerUser, index) => {
          this.communication.userDataService.getUserDetails(followerUser.login)
            .takeWhile(() => this.alive)
            .subscribe(
            user => {
              followerUser.location = user.location;
              if (followerUser.location) {
                this.communication.distanceDataService.getDistanceBetweenLocations(this.user.location, followerUser.location)
                  .takeWhile(() => this.alive)
                  .subscribe(
                  locations => {
                    followerUser.distanceToFollowingUser = locations.distance;
                    this.usersIds.push(user.id);
                    if (this.usersIds.length === length) {
                        this.getUsersWithTheHighestDistances();
                    }
                  }
                  );
              } else {
                this.usersIds.push(user.id);
                this.loadingList = false;
              }
            }
            );
        }
      );
    } else {
      this.loadingList = false;
    }
  }

  getUsersWithTheHighestDistances(): any {
    this.listOfUsersWithHighestDistances = this.followersOfUser.sort((user1, user2) =>
      Number(user2.distanceToFollowingUser) - Number(user1.distanceToFollowingUser)
    ).slice(0, this.numberOfFollowersUser);
    this.loadingList = false;
  }
}
