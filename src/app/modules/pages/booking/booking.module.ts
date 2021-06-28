import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import {PassengersInfoFormModule} from '../../booking/forms/passengers-info-form/passengers-info-form.module';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {PriceModule} from '../../common/price/price.module';


@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    PassengersInfoFormModule,
    MatCardModule,
    FlexModule,
    MatButtonModule,
    PriceModule
  ]
})
export class BookingModule { }
