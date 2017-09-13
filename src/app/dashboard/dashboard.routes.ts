import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './../users/users.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            redirectTo: 'users',
            pathMatch: 'full'
          },
          {
            path: 'users',
            component: UsersComponent
          }
        ]
      }
    ]
  }
];
