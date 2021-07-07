import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FlexModule} from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import {TripSearchFormModule} from '../../trip/forms/trip-search-form/trip-search-form.module';
import {TripFormModule} from '../../trip/forms/trip-form/trip-form.module';
import {TripModule} from "../../trip/trip.module";
import {NgxShimmerLoadingModule} from "ngx-shimmer-loading";
import {ShimmerModule} from "../../common/shimmer/shimmer.module";
import {LangModule} from '../../../lang.module';

@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FlexModule,
        MatCardModule,
        TripSearchFormModule,
        TripFormModule,
        TripModule,
        NgxShimmerLoadingModule,
        ShimmerModule,
        LangModule,
    ]
})
export class HomeModule { }
