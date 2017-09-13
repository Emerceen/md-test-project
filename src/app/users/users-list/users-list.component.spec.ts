import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

import { UsersListComponent, UsersListModule } from './index';

@Component({
  selector: 'app-test',
  template: '<app-users-list></app-users-list>'
})

class TestComponent {

}

let comp: UsersListComponent;
let fixture: ComponentFixture<UsersListComponent>;

describe('UsersListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [UsersListModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    comp = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });
});
