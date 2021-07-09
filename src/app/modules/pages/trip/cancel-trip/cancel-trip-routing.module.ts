import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CancelTripComponent} from './cancel-trip.component';


const routes: Routes = [{ path: ':id', component: CancelTripComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelTripRoutingModule { }
