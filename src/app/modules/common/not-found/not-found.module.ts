import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import player from 'lottie-web';
import {LottieModule} from 'ngx-lottie';
import {FlexLayoutModule} from "@angular/flex-layout";

// tslint:disable-next-line:typedef
export function playerFactory() {
  return player;
}

@NgModule({
    declarations: [NotFoundComponent],
    exports: [
        NotFoundComponent
    ],
  imports: [
    CommonModule,
    LottieModule.forRoot({player: playerFactory}),
    FlexLayoutModule,
  ]
})
export class NotFoundModule { }
