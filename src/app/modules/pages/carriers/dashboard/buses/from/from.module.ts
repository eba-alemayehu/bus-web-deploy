import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FromRoutingModule } from './from-routing.module';
import { FromComponent } from './from.component';
import {MatCardModule} from '@angular/material/card';
import {BusSeatConfigurationModule} from '../../../../../bus/component/bus-seat-configuration/bus-seat-configuration.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';
import {BusFormModule} from '../../../../../bus/form/bus-form/bus-form.module';


@NgModule({
  declarations: [FromComponent],
  imports: [
    CommonModule,
    FromRoutingModule,
    MatCardModule,
    BusSeatConfigurationModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexModule,
    BusFormModule
  ]
})
export class FromModule { }
