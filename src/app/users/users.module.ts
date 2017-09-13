import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    UsersComponent
  ],
  declarations: [
    UsersComponent
  ]
})

export class UsersModule {

}
