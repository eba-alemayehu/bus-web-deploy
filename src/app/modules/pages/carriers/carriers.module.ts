import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarriersRoutingModule } from './carriers-routing.module';
import { CarriersComponent } from './carriers.component';
import {FlexModule} from '@angular/flex-layout';
import {CarrierListModule} from '../../carrier/lists/carrier-list.module';
import {ValidatePaymentDialogModule} from '../../payment/dialogs/validate-payment-dialog/validate-payment-dialog.module';

@NgModule({
  declarations: [CarriersComponent],
  imports: [
    CommonModule,
    CarriersRoutingModule,
    FlexModule,
    CarrierListModule,
    ValidatePaymentDialogModule
  ]
})
export class CarriersModule { }
