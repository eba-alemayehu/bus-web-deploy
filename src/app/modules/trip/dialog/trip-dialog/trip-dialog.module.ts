import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDialogComponent } from './trip-dialog.component';
import {TripFormModule} from '../../forms/trip-form/trip-form.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [TripDialogComponent],
  imports: [
    CommonModule,
    TripFormModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class TripDialogModule { }
