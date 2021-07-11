import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsComponent } from './trips.component';
import {TripListItemModule} from '../../../../trip/components/trip-list-item/trip-list-item.module';
import {TripListModule} from '../../../../trip/lists/trip-list/trip-list.module';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {TripFormModule} from '../../../../trip/forms/trip-form/trip-form.module';
import {TripDialogModule} from '../../../../trip/dialog/trip-dialog/trip-dialog.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {LangModule} from '../../../../../lang.module';


@NgModule({
  declarations: [TripsComponent],
    imports: [
        CommonModule,
        TripsRoutingModule,
        TripListModule,
        FlexModule,
        MatButtonModule,
        TripFormModule,
        TripDialogModule,
        MatIconModule,
        LangModule
    ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class TripsModule { }
