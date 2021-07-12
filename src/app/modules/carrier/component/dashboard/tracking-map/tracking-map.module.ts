import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingMapComponent } from './tracking-map.component';
import {AgmCoreModule} from "@agm/core";
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [TrackingMapComponent],
  exports: [
    TrackingMapComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpbI9jHY-LAddRmmCji-UW_5S45MNZ55M'
    }),
    FlexModule
  ]
})
export class TrackingMapModule { }
