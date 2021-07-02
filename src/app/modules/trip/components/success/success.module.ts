import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success.component';
import {LottieModule} from "ngx-lottie";
import {TripModule} from "../../trip.module";



@NgModule({
  declarations: [SuccessComponent],
  exports: [
    SuccessComponent
  ],
  imports: [
    CommonModule,
    LottieModule,
    TripModule
  ]
})
export class SuccessModule { }
