import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import {BanksListModule} from '../../../payment/lists/banks-list/banks-list.module';
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    BanksListModule,
    MatButtonModule,
    FlexModule
  ]
})
export class PaymentModule { }
