import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDatetimeComponent } from './trip-datetime.component';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
    declarations: [TripDatetimeComponent],
    exports: [
        TripDatetimeComponent
    ],
  imports: [
    CommonModule,
    FlexModule
  ]
})
export class TripDatetimeModule { }
