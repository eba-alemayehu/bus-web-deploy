import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeakDateComponent} from './weak-date.component';
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {MatRippleModule} from "@angular/material/core";



@NgModule({
  declarations: [WeakDateComponent],
  exports: [WeakDateComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatRippleModule
  ]
})
export class WeekDateModule { }
