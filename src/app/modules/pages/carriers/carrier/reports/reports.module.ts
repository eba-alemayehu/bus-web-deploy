import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {TicketsTableModule} from "../../../../ticket/tables/tickets-table/tickets-table.module";


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatTabsModule,
    MatCardModule,
    TicketsTableModule
  ]
})
export class ReportsModule { }
