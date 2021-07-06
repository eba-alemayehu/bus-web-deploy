import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierTumbComponent } from './carrier-tumb.component';
import {FlexModule} from '@angular/flex-layout';
import {ShimmerModule} from '../../../common/shimmer/shimmer.module';



@NgModule({
  declarations: [CarrierTumbComponent],
  exports: [
    CarrierTumbComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    ShimmerModule
  ]
})
export class CarrierTumbModule { }
