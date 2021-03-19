import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarriersRoutingModule } from './carriers-routing.module';
import { CarriersComponent } from './carriers.component';
import {FlexModule} from '@angular/flex-layout';
import {CarrierListModule} from '../../carrier/lists/carrier-list.module';

@NgModule({
  declarations: [CarriersComponent],
  imports: [
    CommonModule,
    CarriersRoutingModule,
    FlexModule,
    CarrierListModule,
  ]
})
export class CarriersModule { }
