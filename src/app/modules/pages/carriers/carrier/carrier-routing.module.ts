import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrierComponent } from './carrier.component';

const routes: Routes = [
  { path: '', component: CarrierComponent },
  { path: 'trips', loadChildren: () => import('./trips/trips.module').then(m => m.TripsModule) },
  { path: 'buses', loadChildren: () => import('./buses/buses.module').then(m => m.BusesModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrierRoutingModule { }
