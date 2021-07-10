import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FlexModule} from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import {TripSearchFormModule} from '../../trip/forms/trip-search-form/trip-search-form.module';
import {TripFormModule} from '../../trip/forms/trip-form/trip-form.module';
import {TripModule} from '../../trip/trip.module';
import {NgxShimmerLoadingModule} from 'ngx-shimmer-loading';
import {ShimmerModule} from '../../common/shimmer/shimmer.module';
import {RouteModule} from '../../trip/components/route/route.module';
import {RouteListModule} from '../../trip/lists/route-list/route-list.module';
import {CarrierListModule} from '../../carrier/lists/carrier-list.module';
import {LangModule} from '../../../lang.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FilterFormModule} from "../../trip/forms/filter-form/filter-form.module";
import {SearchFormModule} from "../../trip/forms/search-form/search-form.module";

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
        RouteModule,
        RouteListModule,
        CarrierListModule,
        LangModule,
        MatFormFieldModule,
        MatDatepickerModule,
        FilterFormModule,
        SearchFormModule,
    ]
})
export class HomeModule { }
