import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { WindowRefService } from './services/window.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    DashboardModule
  ],
  providers: [
    WindowRefService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
