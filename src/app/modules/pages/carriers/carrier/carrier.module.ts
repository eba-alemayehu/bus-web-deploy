import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierComponent } from './carrier.component';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {ShimmerModule} from '../../../common/shimmer/shimmer.module';
import {LangModule} from '../../../../lang.module';


@NgModule({
  declarations: [CarrierComponent],
    imports: [
        CommonModule,
        CarrierRoutingModule,
        FlexModule,
        MatCardModule,
        ShimmerModule,
        LangModule
    ]
})
export class CarrierModule { }
