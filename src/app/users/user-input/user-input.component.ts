import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/takeWhile';

import { ReactiveFormsHelperService } from './../../services/reactive-forms-helper.service';
import { Communication } from './../../data-services/communication.service';
import { User } from './../../entities/user';

@Component({
  selector: 'app-user-input',
  templateUrl: 'user-input.component.html'
})

export class UserInputComponent implements OnInit, OnDestroy {
  public userForm: FormGroup;

  @Input() public loadingList: boolean;
  @Output() loadingListChange: EventEmitter<boolean> = new EventEmitter();
  @Input() public user: User;
  @Output() userChange: EventEmitter<User> = new EventEmitter();
  @Input() public followersOfUser: Array<User>;
  @Output() followersOfUserChange: EventEmitter<Array<User>> = new EventEmitter();

  private alive: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private reactiveFormsHelperService: ReactiveFormsHelperService,
    private communication: Communication
  ) { }

  ngOnInit(): void {
    this.userForm = this.createUserForm();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  createUserForm(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required)
    });
  }

  submitUserForm(event: Event): void {
    event.preventDefault();
    this.emitLoadingList(true);
    this.reactiveFormsHelperService.markFormGroupDirty(this.userForm);
    if (this.userForm.valid) {
      this.communication.userDataService.getUserDetails(this.userForm.controls.name.value)
      .takeWhile(() => this.alive)
      .subscribe(
        user => {
          this.user = user;
          this.getFollowersOfUser(this.user.login);
          this.emitUser(this.user);
        }
      );
    }
  }

  getFollowersOfUser(userLogin: string): void {
    this.communication.userDataService.getFollowersOfUser(userLogin)
      .takeWhile(() => this.alive)
      .subscribe(
        users => {
          this.followersOfUser = users;
          this.emitFollowersOfUser(users);
        }
      );
  }

  emitUser(user: User): void {
    this.userChange.emit(user);
  }

  emitFollowersOfUser(users: Array<User>): void {
    this.followersOfUserChange.emit(users);
  }

  emitLoadingList(value: boolean): void {
    this.loadingListChange.emit(value);
  }
}
