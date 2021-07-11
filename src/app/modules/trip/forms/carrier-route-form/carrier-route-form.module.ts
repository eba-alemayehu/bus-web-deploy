import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierRouteFormComponent } from './carrier-route-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SelectRouteModule} from "../trip-search-form/select-route/select-route.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [CarrierRouteFormComponent],
  exports: [
    CarrierRouteFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectRouteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexModule
  ]
})
export class CarrierRouteFormModule { }
