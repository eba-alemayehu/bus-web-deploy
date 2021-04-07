import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatComponent } from './seat.component';

const routes: Routes = [{ path: ':trip', component: SeatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatRoutingModule { }
