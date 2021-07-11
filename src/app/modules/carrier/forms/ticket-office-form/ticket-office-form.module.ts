import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketOfficeFormComponent } from './ticket-office-form.component';
import {FlexModule} from '@angular/flex-layout';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {LangModule} from '../../../../lang.module';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {NgxMatIntlTelInputModule} from "ngx-mat-intl-tel-input";
import {AgmCoreModule} from "@agm/core";



@NgModule({
  declarations: [TicketOfficeFormComponent],
  exports: [
    TicketOfficeFormComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    MatFormFieldModule,
    LangModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    NgxMatIntlTelInputModule,
    AgmCoreModule
  ]
})
export class TicketOfficeFormModule { }
