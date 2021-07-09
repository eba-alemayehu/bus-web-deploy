import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTripDateFormComponent } from './change-trip-date-form.component';
import {FlexModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LangModule} from '../../../../lang.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@NgModule({
    declarations: [ChangeTripDateFormComponent],
    exports: [
        ChangeTripDateFormComponent
    ],
  imports: [
    CommonModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    LangModule,
    ReactiveFormsModule
  ]
})
export class ChangeTripDateFormModule { }
