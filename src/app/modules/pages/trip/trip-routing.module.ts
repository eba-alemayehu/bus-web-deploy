import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripComponent } from './trip.component';

const routes: Routes = [{ path: ':id', component: TripComponent }, { path: 'bulk ref', loadChildren: () => import('./bulk-ref/bulk-ref.module').then(m => m.BulkRefModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule { }
