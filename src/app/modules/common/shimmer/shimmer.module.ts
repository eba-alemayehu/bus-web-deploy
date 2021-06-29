import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomShimmerComponent } from './custom-shimmer/custom-shimmer.component';



@NgModule({
  declarations: [CustomShimmerComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomShimmerComponent]
})
export class ShimmerModule { }
