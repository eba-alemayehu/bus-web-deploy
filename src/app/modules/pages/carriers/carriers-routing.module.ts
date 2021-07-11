import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarriersComponent } from './carriers.component';

const routes: Routes = [
  { path: '', component: CarriersComponent },
  { path: 'dashboard/:id', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: ':id', loadChildren: () => import('./carrier/carrier.module').then(m => m.CarrierModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarriersRoutingModule { }
