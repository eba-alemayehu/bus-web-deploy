import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessPageRoutingModule } from './success-page-routing.module';
import { SuccessComponent } from './success/success.component';
import {FlexModule} from '@angular/flex-layout';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {TripModule} from "../../../trip/trip.module";
import {LangModule} from '../../../../lang.module';

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
        LangModule
    ]
})
export class SuccessPageModule { }
