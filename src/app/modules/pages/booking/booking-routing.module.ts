import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';
import {PaymentComponent} from './payment/payment.component';

const routes: Routes = [
  { path: 'payment', component: PaymentComponent },
  { path: ':trip', component: BookingComponent },
  { path: 'seat', loadChildren: () => import('./seat/seat.module').then(m => m.SeatModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
