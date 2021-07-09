import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTripComponent } from './edit-trip.component';
import {EditTripFormModule} from '../../forms/edit-trip-form/edit-trip-form.module';



@NgModule({
  declarations: [EditTripComponent],
  imports: [
    CommonModule,
    EditTripFormModule
  ]
})
export class EditTripModule { }
