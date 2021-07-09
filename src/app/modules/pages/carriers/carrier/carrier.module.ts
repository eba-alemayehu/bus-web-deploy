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
import {MainDashboardChartModule} from "../../../carrier/charts/main-dashboard-chart/main-dashboard-chart.module";
import {LinksListModule} from "../../../carrier/component/dashboard/links-list/links-list.module";


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
        LangModule,
        MainDashboardChartModule,
        LinksListModule
    ]
})
export class CarrierModule { }
