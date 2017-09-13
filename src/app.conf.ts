import { AppConfigInterface } from './app/entities/app-conf';

import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.conf');

export const AppConfig: AppConfigInterface = {
  apiGitHubEndpoint: 'https://api.github.com/users/',
  apiDystansEndpoint: `http://www.dystans.org/route.json`
};
