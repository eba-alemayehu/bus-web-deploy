import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingComponent} from '../../../pages/booking/booking.component';
import {ShimmerModule} from '../../../common/shimmer/shimmer.module';
import {MatCardModule} from '@angular/material/card';
import {PassengersInfoFormModule} from '../../../booking/forms/passengers-info-form/passengers-info-form.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {PayDialogModule} from '../../dialogs/pay-dialog/pay-dialog.module';
import {BankCardComponent} from "./bank-card.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {ClipboardModule} from "@angular/cdk/clipboard";



@NgModule({
  declarations: [BankCardComponent],
  exports: [
    BankCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    PassengersInfoFormModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    ShimmerModule,
    MatIconModule,
    ClipboardModule,
  ]
})
export class BankCardModule { }
