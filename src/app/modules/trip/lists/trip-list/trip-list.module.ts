import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListComponent } from './trip-list.component';
import {FlexModule} from '@angular/flex-layout';
import {TripListItemModule} from '../../components/trip-list-item/trip-list-item.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [TripListComponent],
  exports: [
    TripListComponent
  ],
    imports: [
        CommonModule,
        FlexModule,
        TripListItemModule,
        MatButtonModule,
        MatCardModule,
        RouterModule
    ]
})
export class TripListModule { }
