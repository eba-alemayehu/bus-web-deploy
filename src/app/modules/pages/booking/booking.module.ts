import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import {PassengersInfoFormModule} from '../../booking/forms/passengers-info-form/passengers-info-form.module';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { PaymentComponent } from './payment/payment.component';
import { BankCardComponent } from './bank-card/bank-card.component';


@NgModule({
  declarations: [BookingComponent, PaymentComponent, BankCardComponent],

  imports: [
    CommonModule,
    BookingRoutingModule,
    PassengersInfoFormModule,
    MatCardModule,
    FlexModule,
    MatButtonModule,
  ]
})
export class BookingModule { }
