import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusComponent } from './bus.component';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {BusSeatConfigurationModule} from '../../bus/component/bus-seat-configuration/bus-seat-configuration.module';
import {MatButtonModule} from '@angular/material/button';
import {UserTumbModule} from '../../account/component/user-tumb/user-tumb.module';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {TripDriverOrAssistantAddFormModule} from '../../trip/forms/trip-driver-or-assistant-add-form/trip-driver-or-assistant-add-form.module';
import {TripDriverOrAssistantAddDialogModule} from '../../trip/dialog/trip-driver-or-assistant-add-dialog/trip-driver-or-assistant-add-dialog.module';


@NgModule({
  declarations: [BusComponent],
  imports: [
    CommonModule,
    BusRoutingModule,
    FlexModule,
    MatCardModule,
    BusSeatConfigurationModule,
    MatButtonModule,
    UserTumbModule,
    MatListModule,
    MatIconModule,
    TripDriverOrAssistantAddFormModule,
    TripDriverOrAssistantAddDialogModule
  ]
})
export class BusModule { }
