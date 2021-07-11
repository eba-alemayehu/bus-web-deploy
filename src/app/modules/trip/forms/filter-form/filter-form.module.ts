import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterFormComponent } from './filter-form.component';
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {LangModule} from "../../../../lang.module";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {SelectRouteModule} from "../trip-search-form/select-route/select-route.module";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
    declarations: [FilterFormComponent],
    exports: [
        FilterFormComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatFormFieldModule,
    LangModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    SelectRouteModule,
    MatCheckboxModule,
  ]
})
export class FilterFormModule { }
