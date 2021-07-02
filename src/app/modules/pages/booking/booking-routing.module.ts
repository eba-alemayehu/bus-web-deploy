import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';
import {SuccessScreenComponent} from './success-screen/success-screen.component';

const routes: Routes = [
  { path: 'seat', loadChildren: () => import('./seat/seat.module').then(m => m.SeatModule) },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
  { path: 'success', component: SuccessScreenComponent },
  { path: ':trip', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
