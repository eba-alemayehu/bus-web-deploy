import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatRoutingModule } from './seat-routing.module';
import { SeatComponent } from './seat.component';
import {BusSeatConfigurationModule} from '../../../bus/component/bus-seat-configuration/bus-seat-configuration.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {LangModule} from '../../../../lang.module';


@NgModule({
    declarations: [SeatComponent],
    exports: [
        SeatComponent
    ],
    imports: [
        CommonModule,
        SeatRoutingModule,
        BusSeatConfigurationModule,
        MatCardModule,
        MatButtonModule,
        FlexModule,
        LangModule
    ]
})
export class SeatModule { }
