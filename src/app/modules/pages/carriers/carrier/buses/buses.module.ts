import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusesRoutingModule } from './buses-routing.module';
import { BusesComponent } from './buses.component';
import {BusListModule} from '../../../../bus/list/bus-list/bus-list.module';


@NgModule({
  declarations: [BusesComponent],
    imports: [
        CommonModule,
        BusesRoutingModule,
        BusListModule
    ]
})
export class BusesModule { }
