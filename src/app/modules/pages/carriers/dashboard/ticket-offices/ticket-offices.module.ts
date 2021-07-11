import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketOfficesRoutingModule } from './ticket-offices-routing.module';
import { TicketOfficesComponent } from './ticket-offices.component';
import {MatCardModule} from "@angular/material/card";
import {TicketsTableModule} from "../../../../ticket/tables/tickets-table/tickets-table.module";
import {TicketOfficesTableModule} from "../../../../carrier/tables/ticket-offices-table/ticket-offices-table.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [TicketOfficesComponent],
    imports: [
        CommonModule,
        TicketOfficesRoutingModule,
        MatCardModule,
        TicketsTableModule,
        TicketOfficesTableModule,
        MatButtonModule,
        MatIconModule,
        FlexModule
    ]
})
export class TicketOfficesModule { }
