import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanksListComponent } from './banks-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {BookingModule} from '../../../pages/booking/booking.module';
import {BankCardModule} from '../../components/bank-card/bank-card.module';
import {LottieModule} from 'ngx-lottie';
import {playerFactory} from '../../../trip/trip.module';



@NgModule({
  declarations: [BanksListComponent],
  exports: [
    BanksListComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    BookingModule,
    BankCardModule,

  ]
})
export class BanksListModule { }
