import { Locations } from './../entities/locations';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import { User, UserInterface } from './../entities/user';
import { ApiURLs } from './../services/api-urls.service';
import { DistanceDataService } from './distance.service';

@Injectable()

export class UsersDataService {
  constructor(
    private httpClient: HttpClient,
    private apiURLs: ApiURLs,
    private distanceDataService: DistanceDataService
  ) { }

  getUserDetails(userLogin: string): Observable<User> {
    const reqURL = userLogin;
    const url = this.apiURLs.getGitHubURL(reqURL);

    return this.httpClient.get<UserInterface>(url)
      .map(user => User.fromData(user));
  }

  getFollowerDetailsAndDistanceToUser(followerLogin: string, locationOfUser: string): Observable<Locations> {
    const reqURL = followerLogin;
    const url = this.apiURLs.getGitHubURL(reqURL);

    return this.httpClient.get<UserInterface>(url)
      .map(follower => User.fromData(follower))
      .flatMap((follower, index) => {
        if (follower.location) {
          return this.distanceDataService.getDistanceBetweenLocations(locationOfUser, follower.location);
        } else {
          return Observable.of();
        }
      });
  }

  getFollowersWithDistance(followers: Array<User>, userLocation: string): Observable<Array<User>> {
    return Observable.forkJoin(
      followers.map(
        (followerUser: User, index: number) => {
          return this.getFollowerDetailsAndDistanceToUser(followerUser.login, userLocation).map(data => {
            followerUser.distanceToFollowingUser = data.distance;
            return followerUser;
          });
        }
      )
    ).map(data => data);
  }

  getFollowersOfUser(userLogin: string): Observable<Array<User>> {
    const reqURL = `${userLogin}/followers`;
    const url = this.apiURLs.getGitHubURL(reqURL);

    return this.httpClient.get<Array<UserInterface>>(url)
      .map(users => users.map(user => User.fromData(user)));
  }
}
