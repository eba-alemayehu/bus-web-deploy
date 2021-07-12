import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatComponent } from './seat.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AngularSvgIconModule} from "angular-svg-icon";



@NgModule({
  declarations: [SeatComponent],
  exports: [
    SeatComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    AngularSvgIconModule
  ]
})
export class SeatModule { }
