import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusesComponent } from './buses.component';

const routes: Routes = [{ path: '', component: BusesComponent }, { path: 'form', loadChildren: () => import('./from/from.module').then(m => m.FromModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusesRoutingModule { }
