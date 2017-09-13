import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UserInputModule } from './user-input/index';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    UserInputModule
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
