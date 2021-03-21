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


@NgModule({
  declarations: [TripSearchFormComponent],
  exports: [
    TripSearchFormComponent
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
        MatSelectModule
    ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class TripSearchFormModule { }
