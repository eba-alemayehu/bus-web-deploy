import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripsComponent } from './trips.component';

const routes: Routes = [{ path: '', component: TripsComponent }, { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
