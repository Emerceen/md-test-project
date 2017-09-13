
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UserInputModule } from './user-input/index';
import { UsersListModule } from './users-list/users-list.module';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    UserInputModule,
    UsersListModule
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
