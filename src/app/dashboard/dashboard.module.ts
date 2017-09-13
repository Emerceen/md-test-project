import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { Communication } from './../data-services/communication.service';
import { ApiURLs } from './../services/api-urls.service';
import { APP_CONFIG, AppConfig } from './../../app.conf';

@NgModule({
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    Communication,
    ApiURLs
  ]
})

export class DashboardModule {

}
