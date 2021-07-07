import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketListComponent } from './list/ticket-list/ticket-list.component';
import {TicketRoutingModule} from '../pages/ticket/ticket-routing.module';
import {TripModule} from "../trip/trip.module";
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import {QRCodeModule} from "angularx-qrcode";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [TicketListComponent, TicketDetailComponent, QrCodeComponent],
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
    MatDividerModule,
    QRCodeModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class TicketsModule { }
