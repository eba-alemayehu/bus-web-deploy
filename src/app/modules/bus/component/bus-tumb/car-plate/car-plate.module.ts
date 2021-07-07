import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarPlateComponent } from './car-plate.component';
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [CarPlateComponent],
  exports: [
    CarPlateComponent
  ],
  imports: [
    CommonModule,
    FlexModule
  ]
})
export class CarPlateModule { }
