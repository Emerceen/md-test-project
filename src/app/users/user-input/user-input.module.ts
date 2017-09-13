import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserInputComponent } from './user-input.component';
import { ReactiveFormsHelperService } from './../../services/reactive-forms-helper.service';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    UserInputComponent
  ],
  declarations: [
    UserInputComponent
  ],
  providers: [
    ReactiveFormsHelperService
  ]
})

export class UserInputModule {

}
