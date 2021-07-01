import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';
import {PaymentComponent} from './payment/payment.component';
import {SuccessScreenComponent} from './success-screen/success-screen.component';

const routes: Routes = [
  { path: 'payment', component: PaymentComponent },
  { path: 'success', component: SuccessScreenComponent },
  { path: ':trip', component: BookingComponent },
  { path: 'seat', loadChildren: () => import('./seat/seat.module').then(m => m.SeatModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
