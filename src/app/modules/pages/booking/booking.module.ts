import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import {PassengersInfoFormModule} from '../../booking/forms/passengers-info-form/passengers-info-form.module';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { PaymentComponent } from './payment/payment.component';
import { BankCardComponent } from './bank-card/bank-card.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { PaymentPopupComponent } from './payment-popup/payment-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ShimmerModule} from "../../common/shimmer/shimmer.module";
import { SuccessScreenComponent } from './success-screen/success-screen.component';
import {TripModule} from "../../trip/trip.module";


@NgModule({
  declarations: [BookingComponent, PaymentComponent, BankCardComponent, PaymentPopupComponent, SuccessScreenComponent],

  imports: [
    CommonModule,
    BookingRoutingModule,
    PassengersInfoFormModule,
    MatCardModule,
    FlexModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatGridListModule,
    ClipboardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ShimmerModule,
    TripModule,
  ]
})
export class BookingModule { }
