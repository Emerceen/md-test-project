import { Routes, RouterModule } from '@angular/router';

import { DashboardRoutes } from './dashboard/index';

const appRoutes: Routes = [
  ...DashboardRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
