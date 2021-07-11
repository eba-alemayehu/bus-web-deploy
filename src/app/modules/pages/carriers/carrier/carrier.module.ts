import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierComponent } from './carrier.component';
import {FlexModule} from "@angular/flex-layout";
import {CarrierTumbModule} from "../../../carrier/component/carrier-tumb/carrier-tumb.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {TripListModule} from "../../../trip/lists/trip-list/trip-list.module";


@NgModule({
  declarations: [CarrierComponent],
  imports: [
    CommonModule,
    CarrierRoutingModule,
    FlexModule,
    CarrierTumbModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    TripListModule
  ]
})
export class CarrierModule { }
