import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FlexModule} from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import {TripFormModule} from '../../trip/forms/trip-form/trip-form.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexModule,
    MatCardModule,
    TripFormModule,
  ]
})
export class HomeModule { }
