import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './trip.component';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {BusTumbModule} from '../../bus/component/bus-tumb/bus-tumb.module';
import {MatButtonModule} from '@angular/material/button';
import {BusSeatConfigurationModule} from '../../bus/component/bus-seat-configuration/bus-seat-configuration.module';
import {SelectBusDialogModule} from '../../bus/dialog/select-bus-dialog/select-bus-dialog.module';
import {TripDatetimeModule} from '../../trip/components/trip-datetime/trip-datetime.module';
import {LangModule} from '../../../lang.module';
import {TripsTableModule} from '../../trip/tables/trips-table/trips-table.module';
import {TicketsModule} from '../../ticket/ticket.module';
import {TicketsTableModule} from '../../ticket/tables/tickets-table/tickets-table.module';


@NgModule({
  declarations: [TripComponent],
    imports: [
        CommonModule,
        TripRoutingModule,
        MatCardModule,
        FlexModule,
        BusTumbModule,
        MatButtonModule,
        BusSeatConfigurationModule,
        SelectBusDialogModule,
        TripDatetimeModule,
        LangModule,
        TripsTableModule,
        TicketsModule,
        TicketsTableModule
    ]
})
export class TripModule { }
