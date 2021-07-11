import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesComponent } from './routes.component';
import {MatCardModule} from '@angular/material/card';
import {RoutesTableModule} from '../../../../trip/tables/routes-table/routes-table.module';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {CarrierRouteDialogModule} from "../../../../trip/dialog/carrier-route-dialog/carrier-route-dialog.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [RoutesComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    MatCardModule,
    RoutesTableModule,
    FlexModule,
    MatButtonModule,
    CarrierRouteDialogModule,
    MatIconModule
  ]
})
export class RoutesModule { }
