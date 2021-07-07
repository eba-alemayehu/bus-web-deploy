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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


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
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class TripModule { }
