import { Injectable } from '@angular/core';

import { UsersDataService } from './users.service';
import { DistanceDataService } from './distance.service';

@Injectable()

export class Communication {
  constructor(
    public userDataService: UsersDataService,
    public distanceDataService: DistanceDataService
  ) { }
}
