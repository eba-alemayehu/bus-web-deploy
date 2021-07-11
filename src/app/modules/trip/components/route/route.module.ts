import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './route.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {ShimmerModule} from "../../../common/shimmer/shimmer.module";



@NgModule({
  declarations: [RouteComponent],
  exports: [
    RouteComponent
  ],
    imports: [
        CommonModule,
        MatGridListModule,
        MatIconModule,
        ShimmerModule
    ]
})
export class RouteModule { }
