import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainStatComponent } from './main-stat.component';
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [MainStatComponent],
  exports: [
    MainStatComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    FlexModule,
    MatIconModule
  ]
})
export class MainStatModule { }
