import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierListComponent } from './carrier-list.component';
import {FlexModule} from '@angular/flex-layout';
import {CarrierTumbModule} from '../component/carrier-tumb/carrier-tumb.module';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {TicketOfficeFormModule} from '../forms/ticket-office-form/ticket-office-form.module';



@NgModule({
  declarations: [CarrierListComponent],
  exports: [
    CarrierListComponent
  ],
    imports: [
        CommonModule,
        FlexModule,
        CarrierTumbModule,
        RouterModule,
        MatCardModule,
        TicketOfficeFormModule
    ]
})
export class CarrierListModule { }
