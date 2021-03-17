import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FlexModule} from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexModule,
    MatCardModule,
  ]
})
export class HomeModule { }
