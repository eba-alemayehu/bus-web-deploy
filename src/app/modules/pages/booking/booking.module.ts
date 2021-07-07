import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import {PassengersInfoFormModule} from '../../booking/forms/passengers-info-form/passengers-info-form.module';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {PayDialogModule} from '../../payment/dialogs/pay-dialog/pay-dialog.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [BookingComponent],
  exports: [
  ],

    imports: [
        CommonModule,
        BookingRoutingModule,
        MatCardModule,
        PassengersInfoFormModule,
        MatButtonModule,
        PayDialogModule,
        FlexModule,
        MatProgressSpinnerModule
    ]
})
export class BookingModule { }
