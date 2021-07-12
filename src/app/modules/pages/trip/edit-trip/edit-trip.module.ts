import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTripComponent } from './edit-trip.component';
import {TripFormModule} from '../../../trip/forms/trip-form/trip-form.module';
import {EditTripRoutingModule} from './edit-trip-routing.module';
import {LangModule} from '../../../../lang.module';



@NgModule({
  declarations: [EditTripComponent],
  imports: [
    CommonModule,
    TripFormModule,
    EditTripRoutingModule,
    LangModule
  ]
})
export class EditTripModule { }
