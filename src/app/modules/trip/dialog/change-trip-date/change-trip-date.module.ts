import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTripDateComponent } from './change-trip-date.component';
import {ChangeTripDateFormModule} from '../../forms/change-trip-date-form/change-trip-date-form.module';



@NgModule({
  declarations: [ChangeTripDateComponent],
  imports: [
    CommonModule,
    ChangeTripDateFormModule
  ]
})
export class ChangeTripDateModule { }
