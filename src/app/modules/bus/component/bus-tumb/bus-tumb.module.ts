import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusTumbComponent } from './bus-tumb.component';
import {FlexModule} from '@angular/flex-layout';
import {CarPlateModule} from "./car-plate/car-plate.module";



@NgModule({
  declarations: [BusTumbComponent],
  exports: [
    BusTumbComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    CarPlateModule
  ]
})
export class BusTumbModule { }
