import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierRouteDialogComponent } from './carrier-route-dialog.component';
import {CarrierRouteFormModule} from "../../forms/carrier-route-form/carrier-route-form.module";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [CarrierRouteDialogComponent],
  imports: [
    CommonModule,
    CarrierRouteFormModule,
    FlexModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class CarrierRouteDialogModule { }
