import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import {TicketsModule} from "../../ticket/ticket.module";
import { TicketDetailPageComponent } from './ticket-detail-page/ticket-detail-page.component';
import {LangModule} from '../../../lang.module';


@NgModule({
  declarations: [TicketPageComponent, TicketDetailPageComponent],
    imports: [
        CommonModule,
        TicketRoutingModule,
        TicketsModule,
        LangModule,
    ]
})
export class TicketModule { }
