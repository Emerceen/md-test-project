import { RouterModule, provideRoutes, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

import { DashboardComponent, DashboardModule } from './index';
import { WindowRefService } from './../services/window.service';

@Component({
  selector: 'app-test',
  template: '<app-dashboard></app-dashboard>'
})

class TestComponent {

}

let comp: DashboardComponent;
let fixture: ComponentFixture<DashboardComponent>;
let mockWindow: MockWindow;
const event = new Event('document');
const config: Routes = [
  {
    path: '', component: TestComponent
  }
];

class MockWindow {
  public nativeWindow: { innerWidth: number } = {
    innerWidth: 0
  };
}

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
        provideRoutes(config),
        { provide: WindowRefService, useClass: MockWindow }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    mockWindow = fixture.debugElement.injector.get(WindowRefService);
    comp = fixture.componentInstance;
  });

  it('Should set year', () => {
    comp.ngOnInit();
    expect(comp.year).toBeDefined();
  });

  describe('should set sidebar properties, when innerWidth', () => {
    it('is equal to resWidth', () => {
      spyOn(event, 'preventDefault');
      comp.resWidth = 500;
      comp.sidebarOpen = true;
      comp.sidebarToggle(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(comp.sidebarOpen).toBeFalsy();
    });

    it('is less than resWidth', () => {
      spyOn(event, 'preventDefault');
      comp.resWidth = 700;
      comp.sidebarOpen = true;
      comp.sidebarToggle(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(comp.sidebarOpen).toBeFalsy();
    });

    it('is bigger than resWidth', () => {
      spyOn(event, 'preventDefault');
      comp.resWidth = 400;
      comp.sidebarOpen = true;
      comp.sidebarCollapse = true;
      mockWindow.nativeWindow.innerWidth = 800;
      comp.sidebarToggle(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(comp.sidebarOpen).toBeTruthy();
      expect(comp.sidebarCollapse).toBeFalsy();
    });
  });

  describe('should close sidebar when innerWidth', () => {
    it('is less than resWidth', () => {
      mockWindow.nativeWindow.innerWidth = 500;
      comp.resWidth = 767;
      spyOn(event, 'preventDefault');
      comp.mobileSidebarClose(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(comp.sidebarOpen).toBeFalsy();
    });

    it('is equal to resWidth', () => {
      mockWindow.nativeWindow.innerWidth = 767;
      comp.resWidth = 767;
      spyOn(event, 'preventDefault');
      comp.mobileSidebarClose(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(comp.sidebarOpen).toBeFalsy();
    });
  });

  it('should not close sidebar when innerWidth is bigger than resWidth', () => {
    mockWindow.nativeWindow.innerWidth = 800;
    comp.resWidth = 767;
    spyOn(event, 'preventDefault');
    comp.sidebarOpen = true;
    comp.mobileSidebarClose(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(comp.sidebarOpen).toBeTruthy();
  });

  it('should call preventDefault', () => {
    spyOn(event, 'preventDefault');
    comp.blindLink(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
