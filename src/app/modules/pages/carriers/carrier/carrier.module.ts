import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierComponent } from './carrier.component';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {ShimmerModule} from '../../../common/shimmer/shimmer.module';
import {LangModule} from '../../../../lang.module';
import {MainStatModule} from '../../../carrier/component/dashboard/main-stat/main-stat.module';
import {TripsTableModule} from '../../../trip/tables/trips-table/trips-table.module';


@NgModule({
  declarations: [CarrierComponent],
  imports: [
    CommonModule,
    CarrierRoutingModule,
    FlexModule,
    MatCardModule,
    ShimmerModule,
    MainStatModule,
    TripsTableModule,
    LangModule
  ]
})
export class CarrierModule { }
