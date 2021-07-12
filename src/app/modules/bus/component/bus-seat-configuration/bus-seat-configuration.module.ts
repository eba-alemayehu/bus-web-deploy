import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusSeatConfigurationComponent } from './bus-seat-configuration.component';
import {FlexModule} from '@angular/flex-layout';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SeatModule} from '../seat/seat.module';
import {ShimmerModule} from "../../../common/shimmer/shimmer.module";



@NgModule({
  declarations: [BusSeatConfigurationComponent],
  exports: [
    BusSeatConfigurationComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    AngularSvgIconModule.forRoot(),
    MatIconModule,
    MatProgressSpinnerModule,
    SeatModule,
    ShimmerModule,
  ]
})
export class BusSeatConfigurationModule { }
