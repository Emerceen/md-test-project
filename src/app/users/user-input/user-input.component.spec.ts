import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

import { UserInputComponent, UserInputModule } from './index';

@Component({
  selector: 'app-test',
  template: '<app-user-input></app-user-input>'
})

class TestComponent {

}

let comp: UserInputComponent;
let fixture: ComponentFixture<UserInputComponent>;

describe('UserInputComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [UserInputModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputComponent);
    comp = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });
});
