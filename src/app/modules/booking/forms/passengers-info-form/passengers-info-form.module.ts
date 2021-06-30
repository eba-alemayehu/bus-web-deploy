import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PassengersInfoFormComponent} from './passengers-info-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {NgxMatIntlTelInputModule} from "ngx-mat-intl-tel-input";
import {BookingModule} from "../../booking.module";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [PassengersInfoFormComponent],
  exports: [
    PassengersInfoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    NgxMatIntlTelInputModule,
    BookingModule,
    MatDialogModule
  ]
})
export class PassengersInfoFormModule {
}
