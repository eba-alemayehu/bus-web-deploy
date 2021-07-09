import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteTripComponent } from './delete-trip.component';
import {CancelTripFormModule} from '../../forms/cancel-trip-form/cancel-trip-form.module';



@NgModule({
  declarations: [DeleteTripComponent],
  imports: [
    CommonModule,
    CancelTripFormModule
  ]
})
export class DeleteTripModule { }
