import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengersInfoFormComponent } from './passengers-info-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [PassengersInfoFormComponent],
  exports: [
    PassengersInfoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexModule,
    MatInputModule
  ]
})
export class PassengersInfoFormModule { }
