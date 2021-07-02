import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import {BanksListModule} from '../../../payment/lists/banks-list/banks-list.module';


@NgModule({
  declarations: [PaymentComponent],
    imports: [
        CommonModule,
        PaymentRoutingModule,
        BanksListModule
    ]
})
export class PaymentModule { }
