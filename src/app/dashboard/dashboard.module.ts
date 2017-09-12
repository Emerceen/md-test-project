import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

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
  ]
})

export class DashboardModule {

}
