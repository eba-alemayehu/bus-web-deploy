import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingRoutingModule } from './tracking-routing.module';
import { TrackingComponent } from './tracking.component';
import {TrackingMapModule} from "../../../../carrier/component/dashboard/tracking-map/tracking-map.module";


@NgModule({
  declarations: [TrackingComponent],
    imports: [
        CommonModule,
        TrackingRoutingModule,
        TrackingMapModule
    ]
})
export class TrackingModule { }
