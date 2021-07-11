import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'trips', loadChildren: () => import('./trips/trips.module').then(m => m.TripsModule) },
  { path: 'buses', loadChildren: () => import('./buses/buses.module').then(m => m.BusesModule) },
  { path: 'payments', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
  { path: 'ticketers', loadChildren: () => import('./tickters/tickters.module').then(m => m.TicktersModule) },
  { path: 'ticket-offices', loadChildren: () => import('./ticket-offices/ticket-offices.module').then(m => m.TicketOfficesModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  { path: 'routes', loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
