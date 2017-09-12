import { Component, OnInit } from '@angular/core';

import { WindowRefService } from './../services/window.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  public sidebarCollapse: boolean = false;
  public sidebarOpen: boolean = false;
  public resWidth: number = 767;
  public closeTreeview: boolean;
  public year: number;

  constructor(
    private window: WindowRefService
  ) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

  sidebarToggle(event: Event): void {
    event.preventDefault();
    if (this.window.nativeWindow.innerWidth <= this.resWidth) {
      this.sidebarOpen = !this.sidebarOpen;
    } else {
      this.sidebarCollapse = !this.sidebarCollapse;
    }
  }

  mobileSidebarClose(event: Event): void {
    event.preventDefault();
    if (this.window.nativeWindow.innerWidth <= this.resWidth) {
      this.sidebarOpen = false;
    }
  }

  blindLink(event: Event): void {
    event.preventDefault();
  }
}
