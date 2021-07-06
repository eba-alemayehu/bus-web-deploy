import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketListComponent } from './list/ticket-list/ticket-list.component';
import {TicketRoutingModule} from '../pages/ticket/ticket-routing.module';
import {TripModule} from "../trip/trip.module";
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [TicketListComponent, TicketDetailComponent],
  exports: [
    TicketListComponent,
    TicketDetailComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    TripModule,
    FlexModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class TicketsModule { }
