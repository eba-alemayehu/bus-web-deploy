import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from '../ticket/components/ticket/ticket.component';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {TripDatetimeModule} from './components/trip-datetime/trip-datetime.module';
import {PriceModule} from '../common/price/price.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {ShimmerModule} from '../common/shimmer/shimmer.module';
import {LangModule} from '../../lang.module';


// tslint:disable-next-line:typedef
export function playerFactory() {
  return player;
}

@NgModule({
    declarations: [TicketComponent],
    exports: [
        TicketComponent,
    ],
    imports: [
        CommonModule,
        FlexModule,
        MatCardModule,
        TripDatetimeModule,
        PriceModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        [LottieModule.forRoot({player: playerFactory})],
        ShimmerModule,
        LangModule
    ]
})
export class TripModule { }
