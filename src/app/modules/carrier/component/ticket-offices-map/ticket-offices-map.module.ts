import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketOfficesMapComponent } from './ticket-offices-map.component';
import {FlexModule} from "@angular/flex-layout";
import {AgmCoreModule} from "@agm/core";



@NgModule({
  declarations: [TicketOfficesMapComponent],
  exports: [
    TicketOfficesMapComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpbI9jHY-LAddRmmCji-UW_5S45MNZ55M'
    })
  ]
})
export class TicketOfficesMapModule { }
