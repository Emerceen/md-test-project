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
    RouterModule
  ]
})

export class DashboardModule {

}
