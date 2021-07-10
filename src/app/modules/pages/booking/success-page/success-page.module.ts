import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessPageRoutingModule } from './success-page-routing.module';
import { SuccessComponent } from './success.component';
import {FlexModule} from '@angular/flex-layout';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {TripModule} from "../../../trip/trip.module";
import {LangModule} from '../../../../lang.module';
import {MatButtonModule} from "@angular/material/button";
import {TicketsModule} from "../../../ticket/ticket.module";

// tslint:disable-next-line:typedef
export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [SuccessComponent],
    imports: [
        CommonModule,
        SuccessPageRoutingModule,
        FlexModule,
        LottieModule.forRoot({player: playerFactory}),
        TripModule,
        LangModule,
        MatButtonModule,
        TicketsModule
    ]
})
export class SuccessPageModule { }
