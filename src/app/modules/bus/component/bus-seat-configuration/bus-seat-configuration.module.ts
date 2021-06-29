import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusSeatConfigurationComponent } from './bus-seat-configuration.component';
import {FlexModule} from '@angular/flex-layout';
import {AngularSvgIconModule} from 'angular-svg-icon';



@NgModule({
  declarations: [BusSeatConfigurationComponent],
  exports: [
    BusSeatConfigurationComponent
  ],
    imports: [
        CommonModule,
        FlexModule,
        AngularSvgIconModule.forRoot()
    ]
})
export class BusSeatConfigurationModule { }
