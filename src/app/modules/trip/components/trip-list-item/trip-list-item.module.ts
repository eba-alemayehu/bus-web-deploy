import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListItemComponent } from './trip-list-item.component';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    declarations: [TripListItemComponent],
    exports: [
        TripListItemComponent
    ],
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
  ]
})
export class TripListItemModule { }
