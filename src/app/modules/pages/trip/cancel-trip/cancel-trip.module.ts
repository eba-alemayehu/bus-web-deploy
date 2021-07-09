import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CancelTripComponent} from './cancel-trip.component';
import {CancelTripRoutingModule} from './cancel-trip-routing.module';
import {CancelTripFormModule} from '../../../trip/forms/cancel-trip-form/cancel-trip-form.module';



@NgModule({
  declarations: [CancelTripComponent],
  imports: [
    CommonModule,
    CancelTripRoutingModule,
    CancelTripFormModule
  ]
})
export class CancelTripModule { }
