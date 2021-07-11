import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripSearchFormComponent } from './trip-search-form.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {LangModule} from '../../../../lang.module';
import {MatCardModule} from '@angular/material/card';
import {WeekDateModule} from './weak-date/week-date.module';
import {SelectRouteModule} from "./select-route/select-route.module";


@NgModule({
  declarations: [TripSearchFormComponent],
  exports: [
    TripSearchFormComponent,
  ],
    imports: [
        CommonModule,
        FlexModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        GridModule,
        MatRadioModule,
        MatSelectModule,
        LangModule,
        MatCardModule,
        WeekDateModule,
        SelectRouteModule,
    ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class TripSearchFormModule { }
