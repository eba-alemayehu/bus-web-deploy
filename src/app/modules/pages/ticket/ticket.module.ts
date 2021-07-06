import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import {TicketsModule} from "../../ticket/ticket.module";


@NgModule({
  declarations: [TicketPageComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    TicketsModule,
  ]
})
export class TicketModule { }
