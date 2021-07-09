import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripComponent } from './trip.component';

const routes: Routes = [{ path: ':id', component: TripComponent }, { path: 'bulk ref', loadChildren: () => import('./bulk-ref/bulk-ref.module').then(m => m.BulkRefModule) },
  { path: 'cancel', loadChildren: () => import('./cancel-trip/cancel-trip.module').then(m => m.CancelTripModule) },
  { path: 'edit', loadChildren: () => import('./edit-trip/edit-trip.module').then(m => m.EditTripModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule { }
