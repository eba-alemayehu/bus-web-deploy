import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusListComponent } from './bus-list.component';
import {FlexModule} from '@angular/flex-layout';
import {BusTumbModule} from '../../component/bus-tumb/bus-tumb.module';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {AngularSvgIconModule} from "angular-svg-icon";



@NgModule({
  declarations: [BusListComponent],
  exports: [
    BusListComponent
  ],
    imports: [
        CommonModule,
        FlexModule,
        BusTumbModule,
        MatCardModule,
        RouterModule,
      AngularSvgIconModule.forRoot(),
    ]
})
export class BusListModule { }
