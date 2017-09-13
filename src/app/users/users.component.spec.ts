import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

import { UsersComponent, UsersModule } from './index';

@Component({
  selector: 'app-test',
  template: '<app-users></app-users>'
})

class TestComponent {

}

let comp: UsersComponent;
let fixture: ComponentFixture<UsersComponent>;

describe('UsersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [UsersModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    comp = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });
});
