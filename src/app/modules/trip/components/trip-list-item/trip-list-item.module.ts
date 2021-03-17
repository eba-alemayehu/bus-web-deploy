import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListItemComponent } from './trip-list-item.component';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';



@NgModule({
    declarations: [TripListItemComponent],
    exports: [
        TripListItemComponent
    ],
  imports: [
    CommonModule,
    FlexModule,
  ]
})
export class TripListItemModule { }
