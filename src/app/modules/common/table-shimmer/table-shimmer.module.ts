import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableShimmerComponent } from './table-shimmer.component';
import {ShimmerModule} from '../shimmer/shimmer.module';



@NgModule({
  declarations: [TableShimmerComponent],
  exports: [
    TableShimmerComponent
  ],
  imports: [
    CommonModule,
    ShimmerModule
  ]
})
export class TableShimmerModule { }
