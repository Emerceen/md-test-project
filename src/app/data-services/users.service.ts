import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { User, UserInterface } from './../entities/user';
import { ApiURLs } from './../services/api-urls.service';

@Injectable()

export class UsersDataService {
  constructor(
    private httpClient: HttpClient,
    private apiURLs: ApiURLs
  ) { }

  getUserDetails(userName: string): Observable<User> {
    const reqURL = `AddUser/`;
    const url = this.apiURLs.getGitHubURL(reqURL);

    return this.httpClient.get<UserInterface>(url)
      .map(user => User.fromData(user));
  }
}
