import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import {TicketOfficeFormModule} from "../../../../../carrier/forms/ticket-office-form/ticket-office-form.module";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    TicketOfficeFormModule,
    FlexModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpbI9jHY-LAddRmmCji-UW_5S45MNZ55M'
    })
  ]
})
export class FormModule { }
