import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './route.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [RouteComponent],
  exports: [
    RouteComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class RouteModule { }
