import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierComponent } from './carrier.component';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [CarrierComponent],
  imports: [
    CommonModule,
    CarrierRoutingModule,
    FlexModule,
    MatCardModule
  ]
})
export class CarrierModule { }
