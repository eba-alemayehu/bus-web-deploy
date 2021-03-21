import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusTumbComponent } from './bus-tumb.component';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [BusTumbComponent],
  exports: [
    BusTumbComponent
  ],
  imports: [
    CommonModule,
    FlexModule
  ]
})
export class BusTumbModule { }
