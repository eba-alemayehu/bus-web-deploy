import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRouteComponent } from './select-route.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexModule} from "@angular/flex-layout";
import {TranslateModule} from "@ngx-translate/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [SelectRouteComponent],
  exports: [
    SelectRouteComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FlexModule,
    TranslateModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SelectRouteModule { }
