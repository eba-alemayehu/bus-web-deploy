import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierTumbComponent } from './carrier-tumb.component';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [CarrierTumbComponent],
  exports: [
    CarrierTumbComponent
  ],
  imports: [
    CommonModule,
    FlexModule
  ]
})
export class CarrierTumbModule { }
