import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './signup-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ProfilePicModule} from '../../profile-pic/profile-pic.module';
import {MatOptionModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [SignupFormComponent],
  exports: [
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    ProfilePicModule,
    MatOptionModule,
    MatButtonModule,
    FlexModule
  ]
})
export class SignupFormModule { }
