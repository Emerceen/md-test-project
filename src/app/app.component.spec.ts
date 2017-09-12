import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { provideRoutes, Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@Component({
  selector: 'app-test',
  template: ''
})

class TestRouterComponent {
}

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

const config: Routes = [
  {
    path: '', component: TestRouterComponent
  }
];

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestRouterComponent,
        AppComponent
      ],
      imports: [RouterTestingModule, RouterModule],
      providers: [
        provideRoutes(config)
      ]
    });
  });

  it('Should be defined', async(() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      expect(comp).toBeDefined();
    });
  }));
});
