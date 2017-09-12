import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  public year: number;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
