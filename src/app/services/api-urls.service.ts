import { Inject } from '@angular/core';

import { AppConfigInterface } from '../entities/app-conf';
import { APP_CONFIG } from '../../app.conf';

export class ApiURLs {
  private _remoteUrlFromConf: AppConfigInterface = this.config;

  constructor(
    @Inject(APP_CONFIG) private config: AppConfigInterface
  ) {}

  public getGitHubURL(url: string): string {
    const remoteUrl: string = this._remoteUrlFromConf.apiGitHubEndpoint;

    return `${remoteUrl}${url}`;
  }

  public getDystansURL(url: string): string {
    const remoteUrl: string = this._remoteUrlFromConf.apiDystansEndpoint;

    return `${remoteUrl}${url}`;
  }
}
