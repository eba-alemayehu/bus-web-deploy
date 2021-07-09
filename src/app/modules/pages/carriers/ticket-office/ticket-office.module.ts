import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketOfficeComponent } from './ticket-office.component';
import {TicketOfficeRoutingModule} from './ticket-office-routing.module';
import {TicketOfficeFormModule} from '../../../carrier/forms/ticket-office-form/ticket-office-form.module';



@NgModule({
  declarations: [TicketOfficeComponent],
  imports: [
    CommonModule,
    TicketOfficeRoutingModule,
    TicketOfficeFormModule
  ]
})
export class TicketOfficeModule { }
