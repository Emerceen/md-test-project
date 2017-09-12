import { RouterModule, provideRoutes, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

import { DashboardComponent, DashboardModule } from './index';

@Component({
  selector: 'app-test',
  template: '<app-dashboard></app-dashboard>'
})

class TestComponent {

}

let comp: DashboardComponent;
let fixture: ComponentFixture<DashboardComponent>;
const config: Routes = [
  {
    path: '', component: TestComponent
  }
];

describe('DashboardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [
        DashboardModule,
        RouterTestingModule,
        RouterModule,
      ],
      providers: [
        provideRoutes(config)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    comp = fixture.componentInstance;
  });

  it('Should set year', () => {
    comp.ngOnInit();
    expect(comp.year).toBeDefined();
  });
});
