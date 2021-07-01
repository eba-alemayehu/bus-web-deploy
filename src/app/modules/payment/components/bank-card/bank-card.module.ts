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
  ]
})
export class BankCardModule { }
