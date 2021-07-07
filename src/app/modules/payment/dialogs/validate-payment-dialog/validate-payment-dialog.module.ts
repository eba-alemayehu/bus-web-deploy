import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ValidatePaymentDialogComponent} from './validate-payment-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [ValidatePaymentDialogComponent],
  exports: [ValidatePaymentDialogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    FlexModule
  ]
})
export class ValidatePaymentDialogModule { }
