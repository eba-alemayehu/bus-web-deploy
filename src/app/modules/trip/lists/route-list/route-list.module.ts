import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteListComponent } from './route-list.component';
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {RouteModule} from "../../components/route/route.module";



@NgModule({
  declarations: [RouteListComponent],
  exports: [
    RouteListComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    MatCardModule,
    RouteModule
  ]
})
export class RouteListModule { }
