import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import {MatTabsModule} from '@angular/material/tabs';
import {PaymentsTableModule} from '../../../../payment/tables/payments-table/payments-table.module';
import {LangModule} from '../../../../../lang.module';


@NgModule({
  declarations: [PaymentComponent],
    imports: [
        CommonModule,
        PaymentRoutingModule,
        MatTabsModule,
        PaymentsTableModule,
        LangModule
    ]
})
export class PaymentModule { }
