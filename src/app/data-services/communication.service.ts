import { Injectable } from '@angular/core';

import { UsersDataService } from './users.service';

@Injectable()

export class Communication {
  constructor(
    public userDataService: UsersDataService,
  ) { }
}
