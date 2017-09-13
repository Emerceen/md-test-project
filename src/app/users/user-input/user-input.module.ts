import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserInputComponent } from './user-input.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    UserInputComponent
  ],
  declarations: [
    UserInputComponent
  ]
})

export class UserInputModule {

}
