import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';

const routes: Routes = [
  { path: 'seat', loadChildren: () => import('./seat/seat.module').then(m => m.SeatModule) },
  { path: 'success', loadChildren: () => import('./success-page/success-page.module').then(m => m.SuccessPageModule) },
  { path: 'payment/:orderId', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
  // { path: 'success', component: SuccessComponent },
  { path: ':trip', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
