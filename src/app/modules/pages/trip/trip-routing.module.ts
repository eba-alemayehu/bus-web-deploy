import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripComponent } from './trip.component';

const routes: Routes = [{ path: ':id', component: TripComponent }, { path: 'bulk ref', loadChildren: () => import('./bulk-ref/bulk-ref.module').then(m => m.BulkRefModule) },
  { path: ':id/cancel', loadChildren: () => import('../../trip/forms/cancel-trip-form/cancel-trip-form.module').then(m => m.CancelTripFormModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule { }
