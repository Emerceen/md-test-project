import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/index';
import { UsersModule } from './users/index';
import { WindowRefService } from './services/window.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    DashboardModule,
    UsersModule
  ],
  providers: [
    WindowRefService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
