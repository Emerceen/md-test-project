
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


import { ApiURLs } from './../services/api-urls.service';
import { Locations, LocationsInterface } from './../entities/locations';

@Injectable()

export class DistanceDataService {
  constructor(
    private httpClient: HttpClient,
    private apiURLs: ApiURLs
  ) { }

  getDistanceBetweenLocations(location1: string, location2: string): Observable<Locations> {
    const reqURL = `?stops=${location1}|${location2}`;
    const url = this.apiURLs.getDystansURL(reqURL);

    return this.httpClient.get<LocationsInterface>(url)
      .map(location => Locations.fromData(location));
  }
}
