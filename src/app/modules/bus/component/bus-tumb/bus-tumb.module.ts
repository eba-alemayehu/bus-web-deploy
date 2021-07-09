import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusTumbComponent } from './bus-tumb.component';
import {FlexModule} from '@angular/flex-layout';
import {CarPlateModule} from './car-plate/car-plate.module';
import {ShimmerModule} from '../../../common/shimmer/shimmer.module';
import {LangModule} from '../../../../lang.module';



@NgModule({
  declarations: [BusTumbComponent],
  exports: [
    BusTumbComponent
  ],
    imports: [
        CommonModule,
        FlexModule,
        CarPlateModule,
        ShimmerModule,
        LangModule
    ]
})
export class BusTumbModule { }
