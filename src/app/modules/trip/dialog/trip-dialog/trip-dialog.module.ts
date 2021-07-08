import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDialogComponent } from './trip-dialog.component';
import {TripFormModule} from '../../forms/trip-form/trip-form.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {LangModule} from '../../../../lang.module';



@NgModule({
  declarations: [TripDialogComponent],
    imports: [
        CommonModule,
        TripFormModule,
        LangModule,
    ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class TripDialogModule { }
