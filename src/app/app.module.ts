import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/index';
import { UsersModule } from './users/index';
import { WindowRefService } from './services/window.service';
import { UsersDataService } from './data-services/users.service';
import { DistanceDataService } from './data-services/distance.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    DashboardModule,
    UsersModule,
    HttpClientModule
  ],
  providers: [
    WindowRefService,
    UsersDataService,
    DistanceDataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
