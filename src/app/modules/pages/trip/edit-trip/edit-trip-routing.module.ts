import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditTripComponent} from './edit-trip.component';


const routes: Routes = [{ path: ':id', component: EditTripComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTripRoutingModule { }
