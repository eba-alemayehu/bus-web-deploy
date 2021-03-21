import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusSeatConfigurationComponent } from './bus-seat-configuration.component';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [BusSeatConfigurationComponent],
  exports: [
    BusSeatConfigurationComponent
  ],
  imports: [
    CommonModule,
    FlexModule
  ]
})
export class BusSeatConfigurationModule { }
