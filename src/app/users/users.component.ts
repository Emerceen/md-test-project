import { Component } from '@angular/core';
import 'rxjs/add/operator/takeWhile';

import { Communication } from './../data-services/communication.service';
import { User } from './../entities/user';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})

export class UsersComponent {
  public user: User;
  public numberOfFollowersUser: number = 10;
  public listOf10Users: Array<User>;

  private _followersOfUser: Array<User>;
  private alive: boolean = true;

  set followersOfUser(followersOfUser: Array<User>) {
    this._followersOfUser = followersOfUser;
    this.getLocationOfFollowers();
  }
  get followersOfUser(): Array<User> {
    return this._followersOfUser;
  }

  constructor(
    private communication: Communication
  ) { }

  getLocationOfFollowers(): void {
    const length = this._followersOfUser.length;
    this._followersOfUser.map(
      (followerUser, index) => {
        // this.communication.userDataService.getUserDetails(followerUser.login)
        // .takeWhile(() => this.alive)
        // .subscribe(
        //   user => {
        //     followerUser.location = user.location.split(/'/)[0];
            this.communication.distanceDataService.getDistanceBetweenLocations(this.user.location, followerUser.location)
            .takeWhile(() => this.alive)
            .subscribe(
              locations => {
                followerUser.distanceToFollowingUser = locations.distance;
                if (this.checkIfThisIsLastElementOfArray(length, index)) {
                  this.listOf10Users = this.get10UsersWithTheHighestDistances();
                }
              }
            );
      //     }
      //   );
      }
    );
  }

  private checkIfThisIsLastElementOfArray(arrayLength: number, index: number): boolean {
    return arrayLength === index + 1 ? true : false;
  }

  get10UsersWithTheHighestDistances(): Array<User> {
    return this._followersOfUser.sort((user1, user2) =>
      user2.distanceToFollowingUser.valueOf() - user1.distanceToFollowingUser.valueOf()
    ).slice(0, this.numberOfFollowersUser);
  }
}
