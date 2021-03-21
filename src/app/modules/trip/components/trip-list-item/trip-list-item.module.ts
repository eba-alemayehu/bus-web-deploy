import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListItemComponent } from './trip-list-item.component';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {TripDatetimeModule} from '../trip-datetime/trip-datetime.module';
import {PriceModule} from '../../../common/price/price.module';
import {MatCardModule} from '@angular/material/card';



@NgModule({
    declarations: [TripListItemComponent],
    exports: [
        TripListItemComponent
    ],
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    TripDatetimeModule,
    PriceModule,
    MatCardModule,
  ]
})
export class TripListItemModule { }
