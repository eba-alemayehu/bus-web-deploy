import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import {MatCardModule} from "@angular/material/card";
import {TicketsTableModule} from "../../../../../ticket/tables/tickets-table/tickets-table.module";


@NgModule({
  declarations: [TicketsComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    MatCardModule,
    TicketsTableModule
  ]
})
export class TicketsModule { }
