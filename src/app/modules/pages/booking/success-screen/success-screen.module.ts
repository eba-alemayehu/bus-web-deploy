import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessScreenRoutingModule } from './success-screen-routing.module';
import { SuccessScreenComponent } from './success-screen.component';
import {SuccessModule} from '../../../trip/components/success/success.module';
import {SuccessComponent} from '../../../trip/components/success/success.component';



@NgModule({
  declarations: [SuccessScreenComponent],
  imports: [
    CommonModule,
    SuccessScreenRoutingModule,
    SuccessModule
  ]
})
export class SuccessScreenModule { }
