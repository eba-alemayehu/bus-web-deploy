import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {NgxMatIntlTelInputModule} from 'ngx-mat-intl-tel-input';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [LoginFormComponent],
  exports: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    NgxMatIntlTelInputModule,
    FlexModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class LoginFormModule { }
