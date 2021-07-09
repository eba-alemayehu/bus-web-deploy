import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTripComponent } from './edit-trip.component';
import {TripFormModule} from '../../../trip/forms/trip-form/trip-form.module';
import {EditTripRoutingModule} from './edit-trip-routing.module';



@NgModule({
  declarations: [EditTripComponent],
    imports: [
        CommonModule,
        TripFormModule,
        EditTripRoutingModule
    ]
})
export class EditTripModule { }
