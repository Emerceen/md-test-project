import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersListComponent } from './users-list.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    UsersListComponent
  ],
  declarations: [
    UsersListComponent
  ],
  providers: [],
})

export class UsersListModule {

}

