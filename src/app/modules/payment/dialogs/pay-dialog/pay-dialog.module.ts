import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayDialogComponent } from './pay-dialog.component';
import {PayModule} from '../../components/pay/pay.module';



@NgModule({
  declarations: [PayDialogComponent],
    imports: [
        CommonModule,
        PayModule
    ]
})
export class PayDialogModule { }
